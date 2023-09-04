const Menu = ({handleLoading}) => {
return (
    <div className="menu">
            <div className="menu-container">
                <div className="level-container">
                    <button className="easy" onClick={()=>handleLoading(10)}>Easy</button>
                    <button className="medium"onClick={()=>handleLoading(20)}>Medium</button>
                    <button className="hard"onClick={()=>handleLoading(30)}>Hard</button>
                </div>
            </div>
        </div>
)
}
export default Menu;