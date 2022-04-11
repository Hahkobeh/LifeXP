import React, {useContext, useEffect, useRef, useState} from 'react';
import { UserContext }  from '../../UserContext';

import Navbar from '../../Navbar';

import axios from "axios";

import './ManagePage.scss';
import { FaBlackberry } from 'react-icons/fa';

import hatDefault from '../../images/monkey.png';
import shirtDefault from '../../images/cloth.png';
import pantsDefault from '../../images/pants.png';

import hatPirate from '../../images/pirate-hat.png';
import shirtPirate from '../../images/pirate-shirt.png';
import pantsPirate from '../../images/wooden-leg.png';

import hatNinja from "../../images/ninja-head.png";
import shirtNinja from "../../images/ninja-body.png";
import pantsNinja from "../../images/ninja-legs.png";

import hatKnight from "../../images/knight.png";
import shirtKnight from "../../images/armor.png";
import pantsKnight from "../../images/armour.png";


const ManagePage = () => {

    const currentName = localStorage.getItem('username');
    const id = localStorage.getItem('id');

    let shops = [];
    let items = [];
    let inventory = [];
    let equip = [];

    const [itemList, setItemList] = useState([]);
    const [shopList, setShopList] = useState([]);
    const [user, setUser] = useState([]);

    const [hat, setHat] = useState(-1);
    const [shirt, setShirt] = useState(-1);
    const [pants, setPants] = useState(-1);

    async function SetUp(){
        
        await axios.get(`http://localhost:8080/api/user/get-user/${id}`)
            .then( res => {
                console.log(res.data)
                setUser(res.data);
            })
        //console.log(user.experience);

        await axios.get(`http://localhost:8080/api/item/get-equipped/${currentName}`)
            .then( res => {
                equip = res.data;
            })
        await axios.get(`http://localhost:8080/api/item/get-shops`)
            .then( res =>{
                shops = res.data;
            });
        //console.log(shops);
        setShopList(shops);

        await axios.get(`http://localhost:8080/api/item/get-items`)
            .then( res=> {
                items = res.data;
            })

        //console.log(items);

        await axios.get(`http://localhost:8080/api/item/get-inventory/${currentName}`)
            .then( res =>{
                inventory = res.data;
            })
        
        //console.log(inventory);
        items.forEach( (item) => {
            
            item["unlocked"] = false;
            for(let i = 0; i < inventory.length; i++){
                if(item.id === inventory[i].itemId){
                    item["unlocked"] = true;
                    item["equiped"] = inventory[i].equipped;
                    break;
                }
            }
            
        })
        

        let def = items.filter(items => items.shopName === "Default");
        let pir = items.filter(items => items.shopName === "Pirate");
        let nin = items.filter(items => items.shopName === "Ninja");
        let kni = items.filter(items => items.shopName === "Knight");

        shops.forEach( (shop) =>{
            switch(shop.shopName){
                case "Default":
                    def.forEach( (d) =>{
                        d["cost"] = shop.cost;
                        d["requiredXp"] = shop.requiredXp;
                        switch(d.type){
                            case "hat":
                                d["image"] = hatDefault;
                                break;
                            case "shirt":
                                d["image"] = shirtDefault;
                                break;
                            case "pants":
                                d["image"] = pantsDefault;
                                break;
                        }     
                    })
                    break;
                case "Pirate":
                    pir.forEach( (p) =>{
                        p["cost"] = shop.cost;
                        p["requiredXp"] = shop.requiredXp;
                        switch(p.type){
                            case "hat":
                                p["image"] = hatPirate;
                                break;
                            case "shirt":
                                p["image"] = shirtPirate;
                                break;
                            case "pants":
                                p["image"] = pantsPirate;
                                break;
                        }  
                    })
                    break;
                case "Ninja":
                    nin.forEach( (n) =>{
                        n["cost"] = shop.cost;
                        n["requiredXp"] = shop.requiredXp;
                        switch(n.type){
                            case "hat":
                                n["image"] = hatNinja;
                                break;
                            case "shirt":
                                n["image"] = shirtNinja;
                                break;
                            case "pants":
                                n["image"] = pantsNinja;
                                break;
                        }  
                    })
                case "Knight":
                    kni.forEach((k) => {
                        k["cost"] = shop.cost;
                        k["requiredXp"] = shop.requiredXp;
                        switch(k.type){
                            case "hat":
                                k["image"] = hatKnight;
                                break;
                            case "shirt":
                                k["image"] = shirtKnight;
                                break;
                            case "pants":
                                k["image"] = pantsKnight
                                break;
                        }  
                    })
            }
        })
        let all = [...def, ...pir, ...nin, ...kni];
        
        all.forEach ( (each) => {
            
            equip.forEach( (f) => {

                if(f.id === each.id){
                    if(each.type === 'hat'){
                        setHat(each.image);
                    }else if(each.type === 'shirt'){
                        setShirt(each.image);
                    }else{
                        setPants(each.image);
                    }
                }
            })
        })
        setItemList(all);
        //console.log(itemList);
    }

    useEffect( ()=> {
        SetUp();
    }, []);

   


    async function buyItem(id){
        
        await axios.post(`http://localhost:8080/api/item/buy-item/${id}/${currentName}`)
        SetUp();
    }

    async function changeSelected(cont, img, str){

       
        console.log(str);
        const b = str.split(' ')[0];
        const s = str.split(' ')[1];

        if(cont === false){
            buyItem(s);
            return
        }

        if(str.includes("hat")){
            changeHat(img, s);
        }else if(str.includes("shirt")){
            changeShirt(img, s);
        }else{
            changePants(img, s);
        }

        await axios.put(`http://localhost:8080/api/item/equip-item/${currentName}/${s}`)
        
    }
    function changeHat(stor, id){
        //change img src for Hat
        
        setHat(stor);
    }
    function changeShirt(stor, id){

        //change img src for shirt
        setShirt(stor);

    }

    function changePants(stor, id){

        //change img src for pants
        setPants(stor);

    }

    return(
        
        <div>
            <Navbar/>
            
            <div className='store-container'>

                <ul className='selected-items'>
                    <h1>Current Outfit</h1>
                    <li>
                        <div className="selected-item">
                            <img src={hat} alt='Selected Hat'/>
                        </div>
                    </li>
                    <li>
                        <div className="selected-item">
                                <img src={shirt} alt='Selected Shirt'/>
                        </div>
                    </li>
                    <li>
                        <div className="selected-item">
                            <img src={pants} alt='Selected Pants'/>
                        </div>
                    </li>
                

                </ul>

                <ul className ='store-items'>
                    {shopList.map(function(shopList, index){
                            return <li clasName ="store-item">
                                <h1>{shopList.shopName} Garments:</h1>
                                <div className="hat-items">
                                    {itemList.map(function(itemList, index){
                                            return <div className={itemList.shopName === shopList.shopName && itemList.unlocked === true ? 'item' : 
                                            itemList.shopName === shopList.shopName && itemList.unlocked === false ? "blocked item": 'go-away' }
                                            id={(itemList.unlocked === true && ((itemList.type === 'hat' && itemList.shopName === hat) || (itemList.type === 'shirt' && itemList.shopName === shirt)
                                            || (itemList.type === 'pants' && itemList.shopName === pants))) ? "selected" : 'not-selected'}
                                            onClick= {() => changeSelected(itemList.unlocked, itemList.image , itemList.shopName + ' ' + itemList.id + ' ' + itemList.type )} >
                                            {itemList.unlocked === true && <img src={itemList.image} alt= { itemList.shopName + ' ' + itemList.type}/>}
                                            {itemList.unlocked === false && <p className = 'locked'>Locked ({itemList.cost} gold)</p>}
                                            {itemList.unlocked === false && user.experience < itemList.requiredXp && <p className = 'locked'>Level Req. {itemList.requiredXp}</p>}
                                        </div>
                                    })}
                                </div>
                                
                            </li>
                    })}
                </ul>
                
            </div>
           
        </div>
          

    );


}

export default ManagePage;