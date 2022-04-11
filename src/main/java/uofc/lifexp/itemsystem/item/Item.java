package uofc.lifexp.itemsystem.item;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document("items")
public class Item {
    @Id
    private String id;
    private String type; //"hat" / "shirt" / "pants"
    private String shopName;//pirate

    public Item(String type, String shopName) {
        this.id = new ObjectId().toString();
        this.type = type;
        this.shopName = shopName;
    }

    public Item(){}
}
