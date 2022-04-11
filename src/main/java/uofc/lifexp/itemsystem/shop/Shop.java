package uofc.lifexp.itemsystem.shop;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document("shops")
public class Shop {
    @Id
    private String shopName; //pirate
    private int cost; //100
    private int requiredXp; //1000

    public Shop(String shopName, int cost) {
        this.shopName = shopName;
        this.cost = cost;
        this.requiredXp = cost * 10;
    }

    public Shop(){}
}
