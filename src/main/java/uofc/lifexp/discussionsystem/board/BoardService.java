package uofc.lifexp.discussionsystem.board;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardService {
    private final BoardRepository boardRepository;
    @Autowired
    public BoardService(BoardRepository boardRepository){
        this.boardRepository = boardRepository;
    }

    public List<Board> getBoards(){
        return boardRepository.findAll();
    }

    public Board createBoard(String boardName){
        return boardRepository.save(new Board(boardName));
    }
    public void deleteBoard(String boardName){
        boardRepository.deleteById(boardName);
    }
}
