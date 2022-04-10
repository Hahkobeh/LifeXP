package uofc.lifexp.itemsystem.item;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document("items")
public class Item {
    @Id
    private String id;
    private String type; //hat
    private String shopName;//pirate

}
