package uofc.lifexp.itemsystem.shop;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document("shops")
public class Shop {
    @Id
    private String id;
    private String shopName;
}
