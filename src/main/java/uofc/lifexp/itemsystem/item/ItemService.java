package uofc.lifexp.itemsystem.item;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public void createItems(String shopName){
        itemRepository.save(new Item("hat", shopName));
        itemRepository.save(new Item("shirt", shopName));
        itemRepository.save(new Item("pants", shopName));
    }
}
