package uofc.lifexp.itemsystem.inventory;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document("inventories")
public class Inventory {
    @Id
    private String id;
    private String username;
    private String itemId;
}
