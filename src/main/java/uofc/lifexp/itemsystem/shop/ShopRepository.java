package uofc.lifexp.itemsystem.shop;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShopRepository extends MongoRepository<Shop, String> {
}
