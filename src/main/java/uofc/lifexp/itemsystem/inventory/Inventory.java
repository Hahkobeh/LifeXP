package uofc.lifexp.itemsystem.inventory;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document("inventories")
public class Inventory {
    @Id
    private String id;
    private String username;
    private String itemId;
    private boolean equipped = false; //0 uneq 1 equiped

    public Inventory(String username, String itemId) {
        this.id = new ObjectId().toString();
        this.username = username;
        this.itemId = itemId;
    }

    public Inventory() {
    }
}
