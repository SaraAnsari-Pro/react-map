import logo from './logo.svg';
import NameList from './NameList'
import './App.css';

function App() {
let arr = [{
  fullName:"Sara Ansari",
  address:"104 Ave, Kirkland",
  seniority:"junior"
},{
  fullName:"Ariana Azad",
  address:"85 ST, Kirkland",
  seniority:"Senior"
},{
  fullName:"Hamed Azad",
  address:"220 Ave, Samamish",
  seniority:"Senior"
},{
  fullName:"Sam William",
  address:"Redmond way, Redmond",
  seniority:"Intermediate"
},{
  fullName:"Stephanie Flores",
  address:"Education hills, Redmond",
  seniority:"junior"
},{
  fullName:"Sahel Moradi",
  address:"118 NE, Redmond",
  seniority:"Senior"
},{
  fullName:"Marzieh Mesfrosh",
  address:"Novelty hill, Redmond",
  seniority:"junior"
},{
  fullName:"Cheryl Shelton",
  address:"144 Ave, Edmond",
  seniority:"Intermediate"
},{
  fullName:"Merdad Karkudi",
  address:"116 NE, Kirkland",
  seniority:"junior"
},{
  fullName:"Maryam Torabi",
  address:"220 Ave NE, Kirkland",
  seniority:"senior"
}]
////// one way to print array and return it as <h3> {itemList}</h3>////////

// var itemList = [];
// for(var i = 0; i <arr.length; i++){
//   itemList.push((<h1>{arr[i].fullName}: {arr[i].address}</h1>));
// }
// console.log("ITEMLIST:", itemList);
/////////////////////////////////////////

// using map to print array ///////////////
 var nameLi = arr.map(item => (<h1> {item.fullName} : {item.seniority} </h1>))

/////////////nameList component ////////////////////////
var nameLi = arr.map(item => (<NameList fullName = {item.fullName} seniority = {item.seniority} />))

  return (
    <div className="App">

       {/* not using for loop */}
      {/* <h2> {itemList[1].fullName}  </h2> */}
     
      {/* using for loop */}
      {/* <h3> {itemList}</h3> */}

      {/* using map and nameList component */}
       {nameLi}

    </div>
  );
}

export default App;
