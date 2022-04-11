package uofc.lifexp.itemsystem.inventory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InventoryService {
    private final InventoryRepository inventoryRepository;
    @Autowired
    public InventoryService(InventoryRepository inventoryRepository){
        this.inventoryRepository = inventoryRepository;
    }

    public List<Inventory> getInventory(String username){
        return inventoryRepository.getAllByUsername(username);
    }

    public void addInventory(String itemId, String username){
        inventoryRepository.save(new Inventory(username,itemId));
    }

    public void equip(String itemId, String username){
        Inventory inventory = inventoryRepository.findByItemIdAndUsername(itemId,username);
        inventory.setEquipped(true);
        inventoryRepository.save(inventory);
    }

    public void unequip(String itemId, String username){
        Inventory inventory = inventoryRepository.findByItemIdAndUsername(itemId,username);
        inventory.setEquipped(false);
        inventoryRepository.save(inventory);
    }

    public List<Inventory> getEquipped(String username){
        return inventoryRepository.getAllByUsernameAndEquipped(username, true);
    }
}
