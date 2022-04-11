package uofc.lifexp.itemsystem.item;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uofc.lifexp.itemsystem.inventory.Inventory;

import java.util.ArrayList;
import java.util.List;

@Service
public class ItemService {
    private final ItemRepository itemRepository;
    @Autowired
    public ItemService(ItemRepository itemRepository){
        this.itemRepository = itemRepository;
    }

    public List<Item> getItems(){
        return itemRepository.findAll();
    }
    public List<Item> getItems(List<Inventory> inventoryList){
        List<Item> items = new ArrayList<>();
        for (Inventory i:inventoryList) {
            items.add(itemRepository.findById(i.getItemId()).get());
        }
        return items;
    }

    public void createItems(String shopName){
        itemRepository.save(new Item("hat", shopName));
        itemRepository.save(new Item("shirt", shopName));
        itemRepository.save(new Item("pants", shopName));
    }
    public String getShopName(String id){
        return itemRepository.findById(id).get().getShopName();
    }

    public String getType(String id){
        return itemRepository.findById(id).get().getType();
    }

    public String getOldItem(List<Inventory> inventoryList, String type){
        for(Inventory inventory: inventoryList){
            Item temp = itemRepository.findById(inventory.getItemId()).get();
            if(temp.getType().equals(type)){
                return temp.getId();
            }
        }
        return null;
    }
}
