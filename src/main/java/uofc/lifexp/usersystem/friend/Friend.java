package uofc.lifexp.usersystem.friend;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document("friends")
public class Friend {
    @Id
    private String id;
    private String username1;
    private String username2;

    public Friend(String username1, String username2) {
        this.id = new ObjectId().toString();
        this.username1 = username1;
        this.username2 = username2;
    }
}
