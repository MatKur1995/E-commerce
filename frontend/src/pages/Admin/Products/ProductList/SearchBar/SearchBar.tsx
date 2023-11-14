import "./SearchBar.css"


export const SearchBar = () => {
    return (
        <div className="product-list-searchbar">
            <input type="text" className="product-list-input" placeholder="Search here..."/>
            <i className="product-list-searchicon fa fa-search"></i>
        </div>
    );
};
