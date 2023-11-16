import "./UsersComments.css"
import React, { ChangeEvent, useState } from 'react';
import useravatar from "./istockphoto-1337144146-612x612.jpg"
import axios from 'axios';
import { addCommentsTypes } from '../../../types/addComments.types';
import { UsersCommentsProps } from '../../../types/userCommentsProps';
import { useUser } from '../../../contextApi/userProvider';


export const UsersComments: React.FC<UsersCommentsProps> = ({ productDetails, setProductDetails, activeComment }) => {


    const [formData, setFormData] = useState<addCommentsTypes>({
        content: '',
    });
    const { user } = useUser()
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    console.log(productDetails?.comments);


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const productId = productDetails?.id;
        const userId = user?.userId;
        const createCommentDto = {
            content: formData.content,
        };

        axios.post(`http://localhost:5000/comments/add/${userId}/${productId}`, createCommentDto, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}` // Zakładając, że token jest przechowywany w localStorage pod kluczem 'token'
            }
        })
          .then(response => {
              if (response.status === 201) {
                  setFormData({
                      content: '',
                  });
                  console.log('Comment created successfully');
                  // Tutaj powinieneś również odświeżyć komentarze, aby wyświetlić nowo dodany
              }
          })
          .catch(error => {
              console.log(error);
              // Tutaj powinieneś obsłużyć wyświetlanie błędu użytkownikowi, np. informując go o potrzebie zalogowania
          });
    };



    return (
        <>
            {activeComment && (
                <div className="comments-wrapper">
                    <div className="comment-form">
                        <div className="form-img">
                            <img src={useravatar} alt=""/>
                        </div>
                        <form onSubmit={handleSubmit} className="form-comment">
                            <textarea
                              name="content"
                              placeholder="Add a comment..."
                              value={formData.content}
                              onChange={handleInputChange}
                            ></textarea>
                            <button className="send-comment">Comment</button>
                        </form>
                    </div>
                    <div className="comments-container">
                        <p className="comments-title">COMMENTS</p>
                    </div>
                    {productDetails && productDetails.comments.map(comment => (
                    <div key={comment.id} className="comments">
                        <div className="comments-username-time">
                            <div className="user-avatar-wrapper">
                                <img src={useravatar} alt=""/>
                            </div>
                            <div>
                                <div className="user-time-name-wrapper">
                                    <p className="comment-username">{comment.user.username}</p>
                                    <p className="comment-time">31.10.2023</p>
                                </div>
                                <div className="comments-content">
                                    <p className="comments-p">{comment.content}</p>
                                </div>
                                <div className="comments-actions">
                                    <button className="comment-reply"><i className="fa-solid fa-reply"></i> Reply</button>
                                    <button className="comment-reply"><i className="fa-regular fa-pen-to-square"></i> Edit
                                    </button>
                                    <button className="comment-reply"><i className="fa-solid fa-xmark"></i> Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                        ))}
                    <div className="comments">
                        <div className="comments-username-time">
                            <div className="user-avatar-wrapper">
                                <img src={useravatar} alt=""/>
                            </div>
                            <div>
                                <div className="user-time-name-wrapper">
                                    <p className="comment-username">John Doe</p>
                                    <p className="comment-time">31.10.2023</p>
                                </div>
                                <div className="comments-content">
                                    <p className="comments-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Accusantium
                                        aliquid animi beatae expedita minus nam necessitatibus non officiis quia ut.</p>
                                </div>
                                <div className="comments-actions">
                                    <button className="comment-reply"><i className="fa-solid fa-reply"></i> Reply</button>
                                    <button className="comment-reply"><i className="fa-regular fa-pen-to-square"></i> Edit
                                    </button>
                                    <button className="comment-reply"><i className="fa-solid fa-xmark"></i> Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};


// return (
//   <>
//       {activeComment && (
//         <div className="comments-wrapper">
//             <div className="comment-form">
//                 <div className="form-img">
//                     <img src={useravatar} alt=""/>
//                 </div>
//                 <form onSubmit={handleSubmit} className="form-comment">
//                             <textarea
//                               name="content"
//                               placeholder="Add a comment..."
//                               value={formData.content}
//                               onChange={handleInputChange}
//                             ></textarea>
//                     <button className="send-comment">Comment</button>
//                 </form>
//             </div>
//             <div className="comments-container">
//                 <p className="comments-title">COMMENTS</p>
//             </div>
//             {productDetails && productDetails.comments.map(comment => (
//               <p key={comment.id}>{comment.user.username}{comment.content}</p> // Dodaj klucz i upewnij się, że zwracasz element
//             ))}
//
//             {productDetails && productDetails.comments.map(comment => (
//               <div key={comment.id} className="comments">
//                   <div className="comments-username-time">
//                       <div className="user-avatar-wrapper">
//                           <img src={useravatar} alt=""/>
//                       </div>
//                       <div>
//                           <div className="user-time-name-wrapper">
//                               <p className="comment-username">{comment.user.username}</p>
//                               <p className="comment-time">31.10.2023</p>
//                           </div>
//                           <div className="comments-content">
//                               <p className="comments-p">{comment.content}</p>
//                           </div>
//                           <div className="comments-actions">
//                               <button className="comment-reply"><i className="fa-solid fa-reply"></i> Reply</button>
//                               <button className="comment-reply"><i className="fa-regular fa-pen-to-square"></i> Edit
//                               </button>
//                               <button className="comment-reply"><i className="fa-solid fa-xmark"></i> Delete
//                               </button>
//                           </div>
//                       </div>
//                   </div>
//                   <div className="comments-reply">
//                       <div className="user-reply-wrapper">
//                           <img src={useravatar} alt=""/>
//                       </div>
//                       <div>
//                           <div className="comments-username-time">
//                               <p className="reply-username-admin comment-username">Admin</p>
//                               <p className="comment-time">31.10.2023</p>
//                           </div>
//
//                           <div className="comment-res">
//                               <p className="comment-respon"><i className="fa-solid fa-reply"></i> Responding to John
//                                   Doe</p>
//                           </div>
//                           <div className="comments-content">
//                               <p className="comments-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                                   Accusantium
//                                   aliquid animi beatae expedita minus nam necessitatibus non officiis quia ut.</p>
//                           </div>
//                           <div className="comments-actions">
//                               <button className="comment-reply"><i className="fa-solid fa-reply"></i> Reply</button>
//                               <button className="comment-reply"><i className="fa-regular fa-pen-to-square"></i> Edit
//                               </button>
//                               <button className="comment-reply"><i className="fa-solid fa-xmark"></i> Delete
//                               </button>
//                           </div>
//                       </div>
//                   </div>
//                   <div className="comments-reply">
//                       <div className="user-reply-wrapper">
//                           <img src={useravatar} alt=""/>
//                       </div>
//                       <div>
//                           <div className="comments-username-time">
//                               <p className="reply-username-admin comment-username">Admin</p>
//                               <p className="comment-time">31.10.2023</p>
//                           </div>
//
//                           <div className="comment-res">
//                               <p className="comment-respon"><i className="fa-solid fa-reply"></i> Responding to John
//                                   Doe</p>
//                           </div>
//                           <div className="comments-content">
//                               <p className="comments-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                                   Accusantium
//                                   aliquid animi beatae expedita minus nam necessitatibus non officiis quia ut.</p>
//                           </div>
//                           <div className="comments-actions">
//                               <button className="comment-reply"><i className="fa-solid fa-reply"></i> Reply</button>
//                               <button className="comment-reply"><i className="fa-regular fa-pen-to-square"></i> Edit
//                               </button>
//                               <button className="comment-reply"><i className="fa-solid fa-xmark"></i> Delete
//                               </button>
//                           </div>
//                       </div>
//                   </div>
//                   <div className="comments-reply">
//                       <div className="user-reply-wrapper">
//                           <img src={useravatar} alt=""/>
//                       </div>
//                       <div>
//                           <div className="comments-username-time">
//                               <p className="reply-username-admin comment-username">Admin</p>
//                               <p className="comment-time">31.10.2023</p>
//                           </div>
//
//                           <div className="comment-res">
//                               <p className="comment-respon"><i className="fa-solid fa-reply"></i> Responding to John
//                                   Doe</p>
//                           </div>
//                           <div className="comments-content">
//                               <p className="comments-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                                   Accusantium
//                                   aliquid animi beatae expedita minus nam necessitatibus non officiis quia ut.</p>
//                           </div>
//                           <div className="comments-actions">
//                               <button className="comment-reply"><i className="fa-solid fa-reply"></i> Reply</button>
//                               <button className="comment-reply"><i className="fa-regular fa-pen-to-square"></i> Edit
//                               </button>
//                               <button className="comment-reply"><i className="fa-solid fa-xmark"></i> Delete
//                               </button>
//                           </div>
//                       </div>
//                   </div>
//                   ))}
//
//               </div>
//                 <div className="comments">
//                 <div className="comments-username-time">
//                 <div className="user-avatar-wrapper">
//                 <img src={useravatar} alt=""/>
//           </div>
//           <div>
//           <div className="user-time-name-wrapper">
//           <p className="comment-username">John Doe</p>
//           <p className="comment-time">31.10.2023</p>
//           </div>
//           <div className="comments-content">
//           <p className="comments-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//           Accusantium
//           aliquid animi beatae expedita minus nam necessitatibus non officiis quia ut.</p>
//           </div>
//           <div className="comments-actions">
//           <button className="comment-reply"><i className="fa-solid fa-reply"></i> Reply</button>
//           <button className="comment-reply"><i className="fa-regular fa-pen-to-square"></i> Edit
//           </button>
//           <button className="comment-reply"><i className="fa-solid fa-xmark"></i> Delete
//           </button>
//           </div>
//           </div>
//           </div>
//           </div>
//           </div>
//           )}
//   </>
// );
// };