import style from './SearchPanel.module.css';
function SearchPanel({img, alt, onClick}) {
    return ( 
        <div className={style.cont} onClick={onClick}>
            <img src={img} alt="" />
            <p>{alt}</p>
        </div>
     );
}

export default SearchPanel;