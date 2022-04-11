package uofc.lifexp.itemsystem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import uofc.lifexp.itemsystem.inventory.Inventory;
import uofc.lifexp.itemsystem.inventory.InventoryService;
import uofc.lifexp.itemsystem.item.Item;
import uofc.lifexp.itemsystem.item.ItemService;
import uofc.lifexp.itemsystem.shop.Shop;
import uofc.lifexp.itemsystem.shop.ShopService;
import uofc.lifexp.usersystem.UserController;

import java.util.List;

@Controller
@RequestMapping(path = "api/item")
@CrossOrigin(origins = {"http://localhost:3000"})
public class ItemController {
    private final InventoryService inventoryService;
    private final ItemService itemService;
    private final ShopService shopService;
    private final UserController userController;
    @Autowired
    public ItemController(InventoryService inventoryService, ItemService itemService, ShopService shopService, UserController userController){
        this.inventoryService = inventoryService;
        this.itemService = itemService;
        this.shopService = shopService;
        this.userController = userController;
    }

    @PostMapping("/create-shop/{name}/{cost}")
    @ResponseBody
    public boolean createShop(@PathVariable String name, @PathVariable int cost){
        shopService.createShop(name, cost);
        itemService.createItems(name);
        return true;
    }

    //gets

    @GetMapping("/get-shops")
    @ResponseBody
    public List<Shop> getShops(){
        return shopService.getShops();
    }

    @GetMapping("/get-inventory/{username}")
    @ResponseBody
    public List<Inventory> getInventory(@PathVariable String username){
        return inventoryService.getInventory(username);
    }

    @GetMapping("/get-items")
    @ResponseBody
    public List<Item> getItems(){
        return itemService.getItems();
    }



    @PostMapping("/buy-item/{itemId}/{username}")
    @ResponseBody
    public boolean buyItem(@PathVariable String itemId, @PathVariable String username){
        int price = shopService.getPrice(itemService.getShopName(itemId));
        if(userController.requiredLevel(username, price * 10)) {
            if (userController.pay(username, price)) {
                inventoryService.addInventory(itemId, username);
                return true;
            }
        }
        return false;


    }

    /*@PutMapping("/equip-item/{username}/{itemId}")
    @ResponseBody
    public boolean equipItem(@PathVariable String username, @PathVariable String itemId){
        String type = itemService.getType(itemId);
        inventoryService.unequip(type,username);
        inventoryService.equip(itemId,username);

    }*/


}
