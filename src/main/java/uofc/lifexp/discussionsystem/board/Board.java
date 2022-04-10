package uofc.lifexp.discussionsystem.board;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document("boards")
public class Board {
    @Id
    private String id;
    private String boardName;

    public Board(String boardName) {
        this.id = new ObjectId().toString();
        this.boardName = boardName;
    }
    public Board(){}
}
