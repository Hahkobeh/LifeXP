package uofc.lifexp.itemsystem.shop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShopService {
    private final ShopRepository shopRepository;
    @Autowired
    public ShopService(ShopRepository shopRepository){
        this.shopRepository = shopRepository;
    }

    public int getPrice(String shopName){
        return shopRepository.findById(shopName).get().getCost();
    }


    public List<Shop> getShops(){
        return shopRepository.findAll();
    }

    public void createShop(String shopName, int cost){
        shopRepository.save(new Shop(shopName, cost));
    }
}
