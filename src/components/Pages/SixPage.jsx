

var data = require("../modules/data.json");

const SixPage = () => {
    const [value, setValue] = useState("");
    const [activo,setActivo] = useState(false);
    const navigate = useNavigate();

    const alternarBarra = () => {
        setActivo(!activo);
    }
    
    const onChange = (event) => {
    setValue(event.target.value);
    };

    const enrutarPag = (nombre) => {
        console.log("asd")
        if (nombre === " ") {
            navigate("/proyecto-prograweb-grupo1/");
        }
    }
//   const onSearch = (searchTerm) => {
//     setValue(searchTerm);
//     // our api to fetch the search result
//     console.log("search ", searchTerm);
//   };

    const clickLupa = () => {
    // agregarData(graphic, processor, memory, storage, cooling, windows, psupply);
    // alternarBarra;
    }
  return (
      <div className="search-container">
        <div className="search-inner" style={{justifyContent: "end"}}>
          <input type="text" style={{backgroundColor: "gray"}} className={"oculto" + (activo ? "mostrado" : "")} value={value} onChange={onChange} />
          <button className="btn-header"  onClick={alternarBarra}> <i class="bi bi-search"></i> </button>
        </div>
        <div className="dropdown">
          {
          data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.name.toLowerCase();
              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => 
                (
              <div
                onClick={()=>{enrutarPag(item.name)}}
                className="dropdown-row"
                key={item.name}
              >
                {item.name}
              </div>
            ))}
        </div>
      </div>
    );
}
export default SixPage