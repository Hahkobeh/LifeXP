package uofc.lifexp.itemsystem.inventory;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InventoryRepository extends MongoRepository<Inventory,String> {
    List<Inventory> getAllByUsername(String username);
    Inventory findByItemIdAndUsername(String itemId, String username);
}
