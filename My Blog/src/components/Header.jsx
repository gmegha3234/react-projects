export default function Header({children}){
    return (
      <header className="header">
        <h1>
          <span>⚛️</span>My Blog
        </h1>
        {children}
        <button className="btn" >Clear posts</button>
      </header>
    );
}