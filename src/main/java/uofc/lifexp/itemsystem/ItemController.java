package uofc.lifexp.itemsystem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import uofc.lifexp.itemsystem.inventory.InventoryService;
import uofc.lifexp.itemsystem.item.ItemService;
import uofc.lifexp.itemsystem.shop.ShopService;

@Controller
@RequestMapping(path = "api/item")
@CrossOrigin(origins = {"http://localhost:3000"})
public class ItemController {
    private final InventoryService inventoryService;
    private final ItemService itemService;
    private final ShopService shopService;
    @Autowired
    public ItemController(InventoryService inventoryService, ItemService itemService, ShopService shopService){
        this.inventoryService = inventoryService;
        this.itemService = itemService;
        this.shopService = shopService;
    }


}
