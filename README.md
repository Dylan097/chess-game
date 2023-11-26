# Chess

This will end up being a chess game, including local multiplayer and a bare basics chess ai.

---

## Contents

- [Chess](#chess)
    - [Contents](#contents)
    - [Current Features](#current-features)
    - [Future Features](#future-features)
        - [Menu](#menu)
        - [Pieces](#pieces)
            - [Pawn](#pawn)
            - [Bishop](#bishop)
            - [Knight](#knight)
            - [Rook](#rook)
            - [Queen](#queen)
            - [King](#king)
        - [Player Optional Special Features](#player-optional-special-features)
            - [2 Moves Pawn](#2-moves-pawn)
            - [En Passant](#en-passant)
            - [Castling](#castling)
            - [Promotion](#promotion)
        - [Basic Mechanics](#basic-mechanics)
            - [Capturing](#capturing)
            - [Check](#check)
            - [Checkmate](#checkmate)
            - [Stalemate](#stalemate)
            - [Other Drawing Positions](#other-drawing-positions)
                - [Insufficient Material](#insufficient-material)
                - [50 Move Rule](#50-move-rule)
                - [3 Fold Repitition](#3-fold-repitition)
                - [Mutual Draw](#mutual-draw)
        - [Gamemodes](#gamemodes)
            - [Solo Play](#solo-play)
            - [Multiplayer](#multiplayer)
            - [Practice Play](#practice-play)
    - [Bugs](/BUGS.md)
        - [Current Bugs](/BUGS.md#current-bugs)
        - [Squashed Bugs](/BUGS.md#current-bugs)

---

## Current Features

This section will be filled with features as features get added

---

## Future Features

This section contains any features that haven't yet been added, that will be added in the future.

### Menu

The menu will contain a rules button, solo play button, multiplayer button and practice play button. The contents of each section and features will be listed below.

In the future, I would like for there to be a backend to the application, so that there can be a logging on feature, as well as being able to save past games for analysis. 

[Back to Contents](#contents)

---

### Pieces

Below are the pieces that will be implemented in the game, and how they will move in the game.

#### Pawn

This will be the first implementation of the game. The Pawn moves one space forward, and can caputre pieces that are diagonally forward to it. The Pawn can never move backwards, and can only change files when capturing a piece.

[Back to Pieces](#pieces)  
[Back to Contents](#contents)

---

#### Bishop

The Bishop is able to move diagonally as far as it wants, up until it gets to the edge of the board, or would collide with another piece. The Bishop can never leave the colour it starts on, meaning a Bishop starting on a white square, will always be on a white square, and a Bishop on a dark square will always be on a dark square.

[Back to Pieces](#pieces)  
[Back to Contents](#contents)

--- 

#### Knight

The Knight is a very unique piece in this game, as it's able to jump over pieces to get to where it needs to go. The Knight moves in an L shape at all times, moving 2 spaces up/ down and 1 space left/ right, OR 1 space up/ down and 2 spaces left/ right. It can't capture pieces in its path, only pieces on the space it'd land on, if they're opposing pieces.

[Back to Pieces](#pieces)  
[Back to Contents](#contents)

--- 

#### Rook

The Rook is the second most powerful piece in the game, able to move up/ down files as far as it wants, or across ranks as far as it wants, provided there are no pieces in the way. 

[Back to Pieces](#pieces)  
[Back to Contents](#contents)

--- 

#### Queen

The Queen is the most powerful piece in the game, able to move either diagonally like a Bishop, or in a straight line like a Rook. This deadly piece is crucial for each player to be able to win the game, and each player will want the other players Queen off the board as soon as possible.

[Back to Pieces](#pieces)  
[Back to Contents](#contents)

--- 

#### King

This piece moves just one square at a time in any direction around him. The King can never be captured, but must be protected at all costs. If the King is being attacked, only pieces that can block the line of attack, or capture the attacker can move, and the King. If the King is being attacked and every square around it is also being attacked, and there's no move that can capture or block the attacker, then the attacking team wins the game by checkmate. 

Both teams need to be careful though, because if the King isn't being attacked, and there's no pieces that can be moved by a player, then the game ends in a draw, as you can never move your King into a position where it's being attacked.

[Back to Pieces](#pieces)  
[Back to Contents](#contents)

---

### Player Optional Special Features

These are the special moves that each piece can potentially make in a game of chess. They're not necessary for every game, but the option is there for every piece in the game for each of these special moves.

#### 2 Moves Pawn

The Pawn has the ability to move forward 2 spaces from its starting square only. Once the Pawn has moved from its starting square, it is no longer able to move forward 2 spaces, and can only move forward 1 space from this point onwards.

[Back to Player Optional Special Features](#player-optional-special-features)  
[Back to Contents](#contents)

---

#### En Passant

When a Pawn moves forward 2 spaces, if it lands on a square directly next to another Pawn, it can be captured by this Pawn on this move only. If the capture doesn't take place, then it can no longer be captured by the En Passant rule, and can only be taken in its normal fashion.

[Back to Player Optional Special Features](#player-optional-special-features)  
[Back to Contents](#contents)

--- 

#### Castling

Castling is when a King moves towards 1 of its 2 Rooks by 2 spaces, and the Rook it moves towards moves to the other side of the King. This is done in 1 move, and can only be done if the King hasn't made a move, and the Rook that's being used for castling hasn't moved.

It's important to note, that castling can't take place when the King is in check, or if either square that the King is going through is being attacked by an opposing piece. 

It's also important to note, that there must be no pieces between the King and the Rook when castling, which means a minimum of 3 moves must have been played (a Pawn either in front of the King, or the Kingside Knight, the Kingside Bishop and the Kingside Knight) to be able to castle.

Castling on the Queenside is also a possibility. This takes a minimum of 4 moves to do (the Pawn in front of the Queen, the Queenside Bishop at least 2 squares, the Queen and the Queenside Knight).

[Back to Player Optional Special Features](#player-optional-special-features)  
[Back to Contents](#contents)

--- 

#### Promotion

The Pawn can promote to either a Bishop, a Knight, a Rook or a Queen. One of these 4 pieces can only be added to a game if one of a Pawn makes it to the first (for black Pawns) or eighth (for white Pawns) rank. Once promotion happens, the piece the Pawn will then be treated like the piece it Promoted to. Most promotions will be to a Queen, but there are situations where a player will want a Rook, a Knight or a Bishop. This can make Pawns very useful pieces. 

There can be a maximum of 8 promotions for each player (1 promotion for each Pawn). This number goes down for each Pawn that is captured. 

It's worth noting, that only the Pawn that makes it to the final rank will be promoted. Therefore, if a player wants to promote multiple Pawns, then multiple Pawns have to make it to the final rank.

[Back to Player Optional Special Features](#player-optional-special-features)   
[Back to Contents](#contents)

---

### Basic Mechanics

This section explains basic mechanics to be added to the game of chess, which will be done in most if not all games.

#### Capturing

A piece is captured when any piece of the opposing colour lands on the square that's occupied by another piece. The goal for both teams is to try and minimise the army of the opposing team, which would result in an easier win.

[Back to Basic Mechanics](#basic-mechanics)  
[Back to Contents](#contents)

---

#### Check

A check is when a King is being attacked. When a King is in check, it's the job of the player that's in check, to get their King out of check. Therefore, the only pieces that are able to move in this situation is the King (provided there are places for the King to move to), any piece that can block the check, or any piece that can capture the attacking piece. Once you're out of check, once it's your turn again, provided you're not placed in check again, you're free to move any piece that has a square to move to.

[Back to Basic Mechanics](#basic-mechanics)  
[Back to Contents](#contents)

--- 

#### Checkmate

A checkmate is the ultimate goal for both players. If you're able to checkmate your opponent, then you win the game. A checkmate is when you put your opponent in check, and your opponent can't move the king, and there are no pieces that are able to block the check, or capture the attacking piece.

[Back to Basic Mechanics](#basic-mechanics)  
[Back to Contents](#contents)

--- 

#### Stalemate

A stalemate occurs when you or your opponent isn't in check, but there's no legal moves for them to make. If you're winning the game, this is a position that you want to avoid at all costs. However, if you're losing, this is the most ideal result for you, and you want to try any tricks and traps possible to get into a position where you can't move any piece, when you're not in check.

[Back to Basic Mechanics](#basic-mechanics)  
[Back to Contents](#contents)

--- 

#### Other Drawing Positions

Below are the other situations where a game of chess would end in a draw.

##### Insufficient Material

An insufficient material draw happens when there isn't enough pieces on the board to deliver a checkmate. This can be with a bishop and King vs a King, a King vs a King, a Knight and King vs a King, 2 Knights and a King vs a King or a Bishop and a King vs a Bishop and a King.

[Back to Other Drawing Positions](#other-drawing-positions)  
[Back to Basic Mechanics](#basic-mechanics)  
[Back to Contents](#contents)

--- 

##### 50 Move Rule

The 50 move rule is a draw that occurs when no pieces have been captured, or no Pawn has been moved for 50 moves. For this rule to take place, both players must have made 50 moves without a capture or a Pawn move. 

[Back to Other Drawing Positions](#other-drawing-positions)  
[Back to Basic Mechanics](#basic-mechanics)  
[Back to Contents](#contents)

--- 

##### 3-Fold Repitition

The 3-Fold Repition draw occurs when the exact same position has been seen 3 times in the same game. This doesn't necessarily mean 3 of the same moves were made in a row, but that 1 position was seen 3 times in a game. This can be achieved by perpetual check, which is when 3 checks are made in the exact same way.

[Back to Other Drawing Positions](#other-drawing-positions)  
[Back to Basic Mechanics](#basic-mechanics)  
[Back to Contents](#contents)

--- 

##### Mutual Draw

What I'm calling a mutual draw, is when a player offers a draw, and the other player accepts the draw. This only occurs by a player prompt, and both players must accept the draw. If the player being offered the draw declines, then the game continues. 

[Back to Other Drawing Positions](#other-drawing-positions)  
[Back to Basic Mechanics](#basic-mechanics)  
[Back to Contents](#contents)

---

### Gamemodes

The gamemodes I intend to add are listed below.

#### Solo Play

In solo play, the player will play against a bot. This bot will be very basic to start with, and most likely play very random moves, but as time goes on, I plan on making this bot play close to grandmaster level. 

[Back to Gamemodes](#gamemodes)  
[Back to Contents](#contents)

---

#### Multiplayer

To start off with, the multiplayer games will only be local multiplayer, meaning the people playing the game will have to share a screen to be able to play, and make moves on the same screen. As time goes on though, I'd look at the ability for users to play online multiplayer, so that players can test their skills against other players across the globe.

[Back to Gamemodes](#gamemodes)  
[Back to Contents](#contents)

---

#### Practice Play

Practice play is something I plan on implementing once I'm able to provide the best moves in each position. This game mode will have the option of either playing against a bot, or doing a local multiplayer. The idea of this gamemode, is to provide the player with a list of moves that can be made, with the best move being at the top of the list, and the worst being at the bottom, with the idea being to help a player figure out what can be best for them to do. 

With this feature, I hope to be able to also provide an explanation on the idea of each move that'd be played. For example, the sacrifice of a Queen leading to a checkmate, or moving a piece to a square that is being attacked, but can't be captured due to an xray attack on a higher value piece. I hope to be able to give players a much better understanding of how they can improve their strategy in chess, and maybe even have the ability to take on the best players in the World.

[Back to Gamemodes](#gamemodes)  
[Back to Contents](#contents)

---

## Bugs

The link to BUGS.md is below. However I hope for there to be no bugs encountered in this site, every website encounters them, and I hope for there to be as few bugs as possible.

[BUGS.md](/BUGS.md)  
[Back to Contents](#contents)

--- 