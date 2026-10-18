# All 32 Games · Detailed Playing Guide

**Evernight-BOT v1.10.10** · [Back to homepage](/en/)

Every game includes its objective, mechanics, step-by-step play, scoring and useful commands. These explanations are rewritten from the released rules, not pasted bot responses.

> The live bot remains authoritative for timing, rules and input. Sample numbers and names are placeholders.

## Game index

**Spades · Reaction and Survival**

[♠4 Game I](#game-i) · [♠2 Game II](#game-ii) · [♠5 Game IV](#game-iv) · [♠A Game XIV](#game-xiv) · [♠3 Game XVI](#game-xvi) · [♠6 Game XVII](#game-xvii) · [♠7 Game XXXIV](#game-xxxiv) · [♠8 Game XXXVIII](#game-xxxviii)

**Hearts · Psychology and Strategy**

[♥2 Game VII](#game-vii) · [♥A Game XXIII](#game-xxiii) · [♥3 Game XXIV](#game-xxiv) · [♥4 Game XXVI](#game-xxvi) · [♥5 Game XXVII](#game-xxvii) · [♥6 Game XXVIII](#game-xxviii) · [♥J Game XXXVII](#game-xxxvii)

**Clubs · Cooperation and Coordination**

[♣6 Game III](#game-iii) · [♣2 Game VIII](#game-viii) · [♣9 Game XIII](#game-xiii) · [♣A Game XVIII](#game-xviii) · [♣3 Game XIX](#game-xix) · [♣4 Game XXI](#game-xxi) · [♣5 Game XXII](#game-xxii)

**Diamonds · Logic and Knowledge**

[♦5 Game VI](#game-vi) · [♦2 Game IX](#game-ix) · [♦K Game X](#game-x) · [♦J Game XI](#game-xi) · [♦4 Game XII](#game-xii) · [♦A Game XXIX](#game-xxix) · [♦3 Game XXXI](#game-xxxi) · [♦6 Game XXXII](#game-xxxii) · [♦7 Game XXXIII](#game-xxxiii) · [♦10 Game XXXVI](#game-xxxvi)

## Game I · ♠️4 ARENA {#game-i}

**Players：** 2–4 players

### Game overview

Fight in turns using attacks, shielding defense, and energy charges that strengthen your next hit. The special mode may trigger random skill events.

### Step-by-step walkthrough

1. Choose normal or special mode before inviting 2–4 players into one room. Everyone begins with the same starting health.
2. On your turn, commit to one action: attack a target, defend to gain a shield, or charge energy. Attacking consumes stored charge for a stronger hit; defending helps absorb future damage.
3. Watch the remaining opponents and your current defenses. A quick attack might finish a weakened rival, but charging can make a later strike stronger. In special mode, also respond to announced random events.

### Winning and scoring

Eliminate your opponents and be the last player standing.

### Essential commands

- `/GameI 创建 普通`
- `/GameI 创建 特殊`
- `/攻击`
- `/防御`
- `/充能`
- `/GameI 周榜 普通`

**Full rules in the bot：** `/GameI 规则`

---

## Game II · ♠️2 NUMBER BOMB {#game-ii}

**Players：** Solo; 2–8 multiplayer

### Game overview

A bomb number is hidden. Players guess in turn, narrowing the possible range after each miss. The host chooses whether hitting the bomb eliminates or wins; solo attempts are limited.

### Step-by-step walkthrough

1. Choose solo play or a multiplayer room. In multiplayer, the host decides whether finding the bomb number means elimination or victory.
2. Guess a number within the range shown by the bot. Every incorrect attempt narrows the remaining interval, which the next player must use when making their choice.
3. The available range becomes more dangerous as guesses accumulate. In elimination mode, avoid hitting the number; in victory mode, use the narrowing bounds to find it before anyone else.

### Winning and scoring

Win by finding the number or surviving, depending on the selected mode.

### Essential commands

- `/GameII 单人`
- `/GameII 创建 淘汰 3722`
- `/GameII 创建 获胜 3722`
- `/猜 100`

**Full rules in the bot：** `/GameII 规则`

---

## Game III · ♣️6 SITUATION PUZZLE {#game-iii}

**Players：** Solo; normal 2–16; special individual 2–10; or 2–3 teams

### Game overview

Investigate a mysterious scenario by asking questions that receive “yes,” “no,” or “irrelevant.” Piece together the hidden story; question limits and team scoring depend on the mode.

### Step-by-step walkthrough

1. Read the unusual scenario carefully: the visible story omits a crucial explanation. Depending on the selected mode, you may investigate alone, compete, or cooperate in teams.
2. Ask precise yes/no-style questions about motivations, timing, or what characters knew. Use the bot’s yes, no, or irrelevant responses to eliminate theories rather than guessing randomly.
3. Once the clues fit together, submit a coherent reconstruction of what happened. A single keyword is not the same as an accepted explanation, and team modes have their own turn and scoring rules.

### Winning and scoring

Reconstruct the hidden explanation and have it accepted by the judge.

### Essential commands

- `/GameIII 创建 普通单人`
- `/GameIII 创建 普通多人 5`
- `/出题`
- `/问 问题`
- `/还原 答案`

**Full rules in the bot：** `/GameIII 规则`

---

## Game IV · ♠️5 LAST STAND {#game-iv}

**Players：** Solo; 2–6 multiplayer

### Game overview

Cross ten dangerous spaces while managing health and stamina. Moving advances you but costs stamina and may cause damage; resting recovers energy and defending reduces risk.

### Step-by-step walkthrough

1. Each participant starts at the beginning of a ten-space hazard course. You must manage both health and stamina instead of simply rushing forward.
2. Choose to advance, rest, or defend when prompted. Moving gains progress but consumes stamina and can expose you to harm; rest restores stamina; defense reduces incoming risk.
3. Decide whether you can afford another step or need recovery first. Solo play is cleared by reaching the end; multiplayer also rewards being the first finisher or the final survivor.

### Winning and scoring

Reach the finish in solo play; in multiplayer, the first finisher or last survivor wins.

### Essential commands

- `/GameIV 单人`
- `/GameIV 创建`
- `/行动 前进`
- `/行动 休息`
- `/行动 防御`

**Full rules in the bot：** `/GameIV 规则`

---

## Game VI · ♦️5 CIPHER {#game-vi}

**Players：** Solo; race with 2–8 players

### Game overview

Crack a six-digit code using A/B feedback: A means correct digit and position; B means correct digit in the wrong position. In races, everyone works on the same code.

### Step-by-step walkthrough

1. The objective is a randomly selected six-digit secret. Follow the input format shown by the bot; solo mode emphasizes deduction while a multiplayer race uses a shared puzzle.
2. Each guess returns A/B counts. A marks a correct digit in its correct position; B marks a correct digit placed elsewhere. Combine feedback from every previous attempt to rule out impossible codes.
3. Do not forget earlier B clues when you refine the final positions. In a race, efficient elimination of possibilities matters along with being first to crack the code.

### Winning and scoring

Be the first to crack the code; race rankings also consider guesses and time.

### Essential commands

- `/GameVI 创建 单人`
- `/GameVI 创建 竞速`
- `/猜码 123456`

**Full rules in the bot：** `/GameVI 规则`

---

## Game VII · ♥️2 TRUST GAME {#game-vii}

**Players：** Solo; 2–8 multiplayer

### Game overview

Choose cooperation or betrayal each round. After 30 seconds to think, submit during a seven-second window; the mix of choices determines everyone’s points.

### Step-by-step walkthrough

1. Every round offers the same dilemma: cooperate or betray. The bot allows roughly thirty seconds for discussion or thought before opening a short submission window.
2. Submit your choice during the active window. Everyone’s decisions determine the payout, so mutual cooperation, isolated betrayal, and universal betrayal lead to different results.
3. In the six-round multiplayer game, balance immediate points against what other players may do next. The final ranking uses accumulated scores among players still in the match.

### Winning and scoring

After six multiplayer rounds, the highest-scoring active player wins.

### Essential commands

- `/GameVII 单人`
- `/GameVII 创建`
- `/选择 合作`
- `/选择 背叛`

**Full rules in the bot：** `/GameVII 规则`

---

## Game VIII · ♣️2 LINK {#game-viii}

**Players：** Solo; co-op 2–6; team battle 2, 4 or 6

### Game overview

Select publicly shown numbers to reach a target sum. Cooperative teams share limited lives, while two opposing teams compete to get closer to the target.

### Step-by-step walkthrough

1. Choose solo, cooperative, or two-team competitive play. The bot displays candidate numbers and a target that players must approach by selecting numbers.
2. In cooperative play, discuss selections and protect the team’s shared lives; in versus play, your team competes to produce a sum closer to the target than the opposing team.
3. Before submitting, check the available numbers, your calculated total, and the gap to the target. Cooperative stage clearing and team-battle scoring are separate victory systems.

### Winning and scoring

Clear stages in co-op; in team battle, the higher-scoring team wins.

### Essential commands

- `/GameVIII 单人`
- `/GameVIII 创建 合作`
- `/GameVIII 创建 对战`
- `/出牌 6`
- `/队伍 A`

**Full rules in the bot：** `/GameVIII 规则`

---

## Game IX · ♦️2 LOGIC LOCK {#game-ix}

**Players：** Solo; 2–8 multiplayer

### Game overview

Use logic clues to choose the correct A/B/C/D answer. A solo run ends on the first mistake; multiplayer has 20 questions and timed submissions.

### Step-by-step walkthrough

1. Read the logical clues and four choices A–D. Exactly one choice satisfies the stated conditions for that puzzle.
2. Test each possible choice against all clues rather than relying on the first plausible statement. Submit the option in the format and phase announced by the bot.
3. One incorrect answer ends a solo streak. In the twenty-question multiplayer match, the number of correct answers determines the result.

### Winning and scoring

Build a correct-answer streak in solo play; most correct answers wins multiplayer.

### Essential commands

- `/GameIX 单人`
- `/GameIX 创建`
- `/答案 A`

**Full rules in the bot：** `/GameIX 规则`

---

## Game X · ♦️K BEAUTY CONTEST {#game-x}

**Players：** 2–5 players

### Game overview

Each player chooses an integer from 0 to 100. The round target is 80% of the average; the closest choice wins while other players lose points. Extra rules appear as players are eliminated.

### Step-by-step walkthrough

1. Each player independently chooses an integer from 0 to 100. Bigger is not necessarily better; the host’s elimination threshold affects how many poor rounds you can survive.
2. The bot averages all submitted numbers, then multiplies that average by 0.8. The closest choice is favored and others can lose points.
3. Use earlier rounds to anticipate how opponents adjust their picks. Additional conditions can appear as players are eliminated; the final survivor wins.

### Winning and scoring

Reach the elimination threshold and you are out; the last survivor wins.

### Essential commands

- `/GameX 创建 -7`
- `/投票 57`
- `/GameX 周榜`

**Full rules in the bot：** `/GameX 规则`

---

## Game XI · ♦️J QUANTILE {#game-xi}

**Players：** 3–8 players

### Game overview

Estimate answers to numerical trivia. The estimates form numbered bands, then players bet on two bands. Correct bands pay out by odds; incorrect bets cost score cards.

### Step-by-step walkthrough

1. First estimate a numerical trivia answer. The group’s submitted estimates are then used to form numbered bands.
2. Once the bands are announced, place bets on two bands. Where the real answer falls determines which bets pay out according to the listed odds.
3. An accurate personal estimate is not the whole game: you also need to consider the distribution of estimates, payout odds, and possible losses for bad bets.

### Winning and scoring

When the elimination condition ends the match, the player with the most cards wins.

### Essential commands

- `/GameXI 创建`
- `/估值 388`
- `/押注 5 5`
- `/GameXI 周榜`

**Full rules in the bot：** `/GameXI 规则`

---

## Game XII · ♦️4 LAST CLAIM {#game-xii}

**Players：** 2–3 players

### Game overview

Take turns removing between one card and the round’s maximum from a shared pile. Plan around the remaining cards and who will act next.

### Step-by-step walkthrough

1. Players take turns removing cards from one shared pile. The bot shows how many remain and the maximum removal allowed on that turn.
2. Take at least one card but no more than the current limit. Every choice changes the number your next opponent faces.
3. Think backward from the last few moves. Can you force the other player to leave a favorable remainder? Whoever removes the final card wins immediately.

### Winning and scoring

The player who takes the final card wins.

### Essential commands

- `/GameXII 创建`
- `/拿牌 2`
- `/GameXII 周榜`

**Full rules in the bot：** `/GameXII 规则`

---

## Game XIII · ♣️9 DEADMAN'S DRAW {#game-xiii}

**Players：** Solo; 2–4 multiplayer

### Game overview

Draw cards or stand. Drawing a suit already seen in the same turn wipes out all cards you have accumulated, so balance risk against a higher total.

### Step-by-step walkthrough

1. On your turn you can draw again to increase your card total or stand to protect what you already hold. Card suits are the critical source of risk.
2. Drawing a suit that has already appeared in your current turn wipes the entire accumulated hand, so more cards do not always mean more points.
3. Evaluate the suits already seen and the value of your current hand before deciding to stop. Totals are compared after five rounds, with a tiebreak for the leaders if necessary.

### Winning and scoring

The highest card-value total after five rounds wins; top ties go to a tiebreak.

### Essential commands

- `/GameXIII 单人`
- `/GameXIII 创建`
- `/摸牌`
- `/停手`

**Full rules in the bot：** `/GameXIII 规则`

---

## Game XIV · ♠️A QUICK DRAW {#game-xiv}

**Players：** Solo; 2–8 multiplayer

### Game overview

Wait for the real GO signal among possible fakes. React with that round’s GO code only after the genuine signal; false starts cost points.

### Step-by-step walkthrough

1. The bot may show false GO messages before the genuine start signal. Wait until the real prompt and its current-round code appear.
2. Respond using the code from that genuine GO. Sending too early counts as a false start and may cost points, while a slower valid reaction earns fewer speed points.
3. Never reuse an earlier GO code from memory. Verify the newest announcement, then send the exact code quickly. Eight rounds of valid timing and mistakes determine the total score.

### Winning and scoring

After eight rounds, total reaction points decide the winner; faster valid reactions earn more.

### Essential commands

- `/GameXIV 创建`
- `/抢 GO码`
- `/GameXIV 周榜`

**Full rules in the bot：** `/GameXIV 规则`

---

## Game XVI · ♠️3 COMMAND SHIFT {#game-xvi}

**Players：** Solo; 2–8 multiplayer

### Game overview

Convert a shown symbol to A/B/C using a mapping. Later rounds may reverse or shift the answer, so apply each temporary rule carefully.

### Step-by-step walkthrough

1. Read the mapping that connects each displayed symbol to A, B, or C. Early questions mainly test whether you can apply the shown mapping.
2. Later questions may add temporary operations such as reversing or shifting the mapped result. Calculate the base answer first and apply that round’s adjustment afterward.
3. Do not carry an old extra rule into the next question. Re-read both the mapping and the current instruction; the player with the most correct answers over eight rounds wins.

### Winning and scoring

Most correct answers across eight rounds wins.

### Essential commands

- `/GameXVI 创建`
- `/答 A`
- `/GameXVI 周榜`

**Full rules in the bot：** `/GameXVI 规则`

---

## Game XVII · ♠️6 CLOCKWORK {#game-xvii}

**Players：** Solo; 2–8 multiplayer

### Game overview

A target time is announced, followed by START. Estimate its passage without seeing the internal clock, and send STOP as close to the target as possible.

### Step-by-step walkthrough

1. The bot first announces a target duration and then posts START. The aim is accuracy, not simply being the fastest to respond.
2. Estimate the elapsed time mentally and submit the stop command when you believe the target has passed. You cannot watch the bot’s internal timer tick.
3. Each round evaluates your error relative to the target, whether you stop early or late. Scores accumulate across six rounds, with separate commands for creating the room and stopping the clock.

### Winning and scoring

The highest total score after six rounds wins; smaller timing error ranks better.

### Essential commands

- `/GameXVII 创建`
- `/GameXVII 停`
- `/GameXVII 周榜`

**Full rules in the bot：** `/GameXVII 规则`

---

## Game XVIII · ♣️A SYNC {#game-xviii}

**Players：** 2–8 players

### Game overview

Everyone chooses A, B or C. Matching the largest group scores points, while a completely unanimous choice gives a bonus for perfect synchronization.

### Step-by-step walkthrough

1. Everyone makes one choice from A, B, or C in the same round. Your task is to anticipate the rest of the group.
2. Matching the most popular answer earns synchronization points. When every single player chooses the same option, a stronger unanimity bonus applies.
3. Scores accumulate over eight rounds. Discussion may help players coordinate, but a late change of mind can prevent a complete group match.

### Winning and scoring

Highest individual synchronization score after eight rounds wins.

### Essential commands

- `/GameXVIII 创建`
- `/选 A`
- `/GameXVIII 周榜`

**Full rules in the bot：** `/GameXVIII 规则`

---

## Game XIX · ♣️3 RELAY {#game-xix}

**Players：** 2–8 players

### Game overview

Players solve chained arithmetic operations in order. Only the active runner can answer their step, with up to two tries before the correct value is passed onward.

### Step-by-step walkthrough

1. Each relay is a chain of integer calculations. Players take turns, and the next step depends on the number produced by the previous step.
2. Only the current runner may answer. A wrong response can be retried once; if neither try succeeds, the bot passes on the correct value so the chain continues.
3. Stay attentive to what earlier teammates received and returned. After five chains, players are ranked by their personal accumulated points.

### Winning and scoring

After five relay chains, the highest individual score wins.

### Essential commands

- `/GameXIX 创建`
- `/答 12`
- `/GameXIX 周榜`

**Full rules in the bot：** `/GameXIX 规则`

---

## Game XXI · ♣️4 CONSENSUS {#game-xxi}

**Players：** 2–8 players

### Game overview

Each player receives different constraints on options A–D. Discuss them to find the one option that satisfies everyone, then all submit that same choice.

### Step-by-step walkthrough

1. The bot presents options A–D but gives different constraints to different players. What works for you alone may contradict someone else’s information.
2. Share the restrictions openly and eliminate options that violate any member’s clue. Confirm agreement before everyone submits the same remaining choice.
3. The team scores a round only when all players select the same correct option. Over six rounds, coordination matters as much as solving the logic.

### Winning and scoring

The team scores only when everyone agrees on the correct option; totals are compared after six rounds.

### Essential commands

- `/GameXXI 创建`
- `/选 B`
- `/GameXXI 周榜`

**Full rules in the bot：** `/GameXXI 规则`

---

## Game XXII · ♣️5 MOSAIC {#game-xxii}

**Players：** 2–8 players

### Game overview

Reassemble a letter-and-digit code from fragments assigned to different players. One designated assembler submits the complete code each round.

### Step-by-step walkthrough

1. A full alphanumeric code is broken into fragments distributed among players. Begin by gathering every fragment and any available ordering clue.
2. The bot designates one assembler for the round. Teammates discuss how the pieces connect, while only the selected player submits the reconstructed code before the deadline.
3. Check the entire sequence instead of extrapolating from one fragment. Correct reconstruction awards points to the assembler and also to teammates who contributed.

### Winning and scoring

A correct reconstruction rewards both the assembler and teammates; totals are ranked after six rounds.

### Essential commands

- `/GameXXII 创建`
- `/拼 完整代码`
- `/GameXXII 周榜`

**Full rules in the bot：** `/GameXXII 规则`

---

## Game XXIII · ♥️A MIND TRAP {#game-xxiii}

**Players：** 2–8 players

### Game overview

The objective changes between minority wins, majority wins, or unanimous choice. After discussion, players reveal A/B choices one by one; later players can see earlier choices.

### Step-by-step walkthrough

1. At the start of a round the bot announces the scoring objective: minority, majority, or unanimity. The same A/B vote can have opposite value under different goals.
2. After discussion, players reveal their choices in a random order. Later players can see earlier choices and decide whether to join the crowd or create a minority.
3. The winner has the highest cumulative score after seven rounds. Read the round’s objective before predicting which side will pay off.

### Winning and scoring

Highest score after seven rounds wins; choosing the right side depends on the round objective.

### Essential commands

- `/GameXXIII 创建`
- `/选 A`
- `/选 B`
- `/GameXXIII 周榜`

**Full rules in the bot：** `/GameXXIII 规则`

---

## Game XXIV · ♥️3 SECRET BID {#game-xxiv}

**Players：** 2–8 players

### Game overview

Bid from a limited chip supply. Each round rewards either the highest bid, the second-highest distinct bid, or the lowest unique bid. Every bid costs chips regardless of winning.

### Step-by-step walkthrough

1. Every player has a limited chip supply. At the start of each round the bot announces the particular rule for a winning bid.
2. The winner might be the highest bid, the second-highest distinct amount, or the lowest unique bid. Placed bids consume chips even when they do not win the prize.
3. Balance the current auction against future bidding power. After eight rounds, reward points determine the winner; unused chips are not the final score.

### Winning and scoring

Most reward points after eight rounds wins; leftover chips are not the score.

### Essential commands

- `/GameXXIV 创建`
- `/出价 15`
- `/GameXXIV 周榜`

**Full rules in the bot：** `/GameXXIV 规则`

---

## Game XXVI · ♥️4 ALIBI {#game-xxvi}

**Players：** 2–8 players

### Game overview

One player is the actor each round; everyone else predicts A or B. After predictions are revealed, the actor chooses and may earn extra points for fooling others.

### Step-by-step walkthrough

1. One player is the actor in each round. Everyone else predicts whether that person will choose A or B before the final action is known.
2. Predictions are revealed, and only then does the actor pick an action. The actor may follow the crowd’s expectation or deliberately choose the opposite.
3. Predictors earn points for being correct while the actor can benefit from fooling them. Roles rotate through seven rounds; accumulated points determine the winner.

### Winning and scoring

Highest combined prediction and deception score after seven rounds wins.

### Essential commands

- `/GameXXVI 创建`
- `/预测 A`
- `/行动 B`
- `/GameXXVI 周榜`

**Full rules in the bot：** `/GameXXVI 规则`

---

## Game XXVII · ♥️5 DOUBLE FACE {#game-xxvii}

**Players：** 2–8 players

### Game overview

Publicly promise cooperation or betrayal, then choose your actual move. Actual choices determine base points, with an extra bonus for keeping your promise.

### Step-by-step walkthrough

1. Start by publicly promising cooperation or betrayal. Others can use that promise to judge you, but your later action is a separate choice.
2. Submit your actual action afterward. Base points depend on what people really do, while keeping your promise grants additional credibility points.
3. Honesty can earn a bonus, yet rivals may try to exploit expectations. After eight rounds, the highest accumulated score wins.

### Winning and scoring

Highest total after eight rounds wins.

### Essential commands

- `/GameXXVII 创建`
- `/承诺 合作`
- `/行动 背叛`
- `/GameXXVII 周榜`

**Full rules in the bot：** `/GameXXVII 规则`

---

## Game XXVIII · ♥️6 LEVERAGE {#game-xxviii}

**Players：** 2–8 players

### Game overview

Three proposals offer different personal preference points. State your support, then lobby others to change theirs. Score from your final preference and successful persuasion.

### Step-by-step walkthrough

1. Three proposals A–C appear each round, but they have different preference scores for each player. First identify which outcome benefits you most.
2. Publicly support a proposal, then try to persuade others to change their votes. Successful lobbying can add points, while your final supported proposal affects your personal reward.
3. Sometimes a persuasion bonus is worth pursuing; at other times defending your favorite proposal is better. Six rounds of preference and influence scores decide the winner.

### Winning and scoring

Highest personal score after six rounds wins.

### Essential commands

- `/GameXXVIII 创建`
- `/支持 A`
- `/游说 玩家昵称 B`
- `/GameXXVIII 周榜`

**Full rules in the bot：** `/GameXXVIII 规则`

---

## Game XXIX · ♦️A SEQUENCE {#game-xxix}

**Players：** Solo; 2–8 multiplayer

### Game overview

Identify the pattern in generated number sequences—differences, ratios, alternating operations and more—then submit the next integer. Correct and early answers earn points.

### Step-by-step walkthrough

1. The bot displays a sequence of numbers with the next term missing. The pattern can involve fixed differences, multiplication, alternating operations, or recurrence.
2. Inspect consecutive differences and ratios, then test whether odd/even positions or earlier terms create the pattern. Submit the next integer once the rule fits the shown examples.
3. Multiplayer scores correct answers and rewards early solutions; totals are compared after ten rounds. Solo mode focuses on solving consecutive sequence puzzles.

### Winning and scoring

Highest score after ten rounds wins.

### Essential commands

- `/GameXXIX 创建`
- `/答 16`
- `/GameXXIX 周榜`

**Full rules in the bot：** `/GameXXIX 规则`

---

## Game XXXI · ♦️3 SWITCHBOARD {#game-xxxi}

**Players：** Solo; 2–8 multiplayer

### Game overview

Five switches toggle different combinations of five lights. Submit a switch sequence that lights them all; using a shorter valid sequence earns more points.

### Step-by-step walkthrough

1. Inspect five lights and the effect of each of five switches. Pressing one switch toggles a particular subset of lights; the goal is to light all five.
2. Work out a full switch sequence and submit it. One switch may affect several lights, while repeating a toggle can undo an earlier change.
3. A valid solution is necessary, but using fewer actions can earn a better score. Seven rounds of solutions determine the overall winner.

### Winning and scoring

Highest total after seven rounds wins.

### Essential commands

- `/GameXXXI 创建`
- `/答 1 3 2`
- `/GameXXXI 周榜`

**Full rules in the bot：** `/GameXXXI 规则`

---

## Game XXXII · ♦️6 VAULT 6 {#game-xxxii}

**Players：** Solo; 2–8 multiplayer

### Game overview

Place six symbols into positions A–F based on ordering, adjacency and exclusion clues. Each puzzle is generated with exactly one valid arrangement.

### Step-by-step walkthrough

1. Six distinct symbols must fill positions A–F exactly once each. Clues constrain their order, adjacency, or forbidden positions.
2. Sketch six slots and place any symbols whose positions are certain. Use left/right and neighbor relationships to narrow down the remaining possibilities.
3. Check the completed arrangement against every single clue before submitting. Each puzzle has one valid solution; scores accumulate over six rounds.

### Winning and scoring

Highest score for correct arrangements after six rounds wins.

### Essential commands

- `/GameXXXII 创建`
- `/答 圆星角菱月方`
- `/GameXXXII 周榜`

**Full rules in the bot：** `/GameXXXII 规则`

---

## Game XXXIII · ♦️7 MAHJONG TRIVIA {#game-xxxiii}

**Players：** Solo; 2–8 multiplayer

### Game overview

Solve riichi-mahjong scoring questions using the hand, winds and win conditions. Choose han, fu or total-point mode, then submit your answer within the time limit.

### Step-by-step walkthrough

1. Select solo or multiplayer, then choose han, fu, or point-calculation mode. The bot gives a riichi mahjong hand plus context such as prevailing wind, seat wind, and winning method.
2. Identify the valid yaku first, then calculate the requested han count, fu, or total points. Conditions such as the winning method can change the result, and each answer has a deadline.
3. In solo play, maintain a correct-answer streak. In multiplayer, mistakes or timeouts cost lives, and the final surviving player wins.

### Winning and scoring

Solo aims for a streak; multiplayer gives two lives each, and the last survivor wins.

### Essential commands

- `/GameXXXIII 单人 算番`
- `/GameXXXIII 创建 算点数`
- `/答 答案`
- `/GameXXXIII 周榜 算番`

**Full rules in the bot：** `/GameXXXIII 规则`

---

## Game XXXIV · ♠️7 BOMB TRANSFER {#game-xxxiv}

**Players：** 2–10 players

### Game overview

Pass a ticking bomb along the announced player order. Each round has an unknown 8–30 second fuse; only the holder can pass it, and passing does not reset the timer.

### Step-by-step walkthrough

1. Once a room starts, the game establishes the order in which the bomb can be passed. Each round begins with a holder, but its detonation time is hidden.
2. Only the current holder may pass it to the next player. Passing does not restart the fuse, so delaying a transfer leaves less time for whoever receives it.
3. Whoever holds the bomb when it explodes is eliminated, and survivors continue. Passing is not free-form: the announced player order must be followed.

### Winning and scoring

The holder at detonation is eliminated; the last survivor wins.

### Essential commands

- `/GameXXXIV 创建`
- `/传`
- `/GameXXXIV 周榜`

**Full rules in the bot：** `/GameXXXIV 规则`

---

## Game XXXVI · ♦️10 BOMB CHAMBERS {#game-xxxvi}

**Players：** 3–6 players

### Game overview

Twelve hidden rooms contain safe spaces, bombs and one special room. Choose a room in turn using clues; a bomb eliminates you, while the special room can trigger a skill.

### Step-by-step walkthrough

1. Twelve numbered rooms hide safe, bomb, and special outcomes. The bot reveals clues in stages rather than revealing the whole map at once.
2. On your turn, select an allowed room. A bomb room eliminates the entrant; a special room may provide information or a skill that must be used according to the bot’s prompt.
3. Discuss known clues with other players, but each current player is responsible for their choice. Everyone still alive at the end can win together. This mode allows 3–6 players.

### Winning and scoring

Everyone still alive after all choices wins; there may be multiple survivors.

### Essential commands

- `/GameXXXVI 创建`
- `/选房 3`
- `/技能 玩家昵称`
- `/GameXXXVI 周榜`

**Full rules in the bot：** `/GameXXXVI 规则`

---

## Game XXXVII · ♥️J RULES HORROR {#game-xxxvii}

**Players：** Solo; 2–8 multiplayer

### Game overview

Explore a procedurally generated rule-horror scenario. Some stated rules are false or only conditionally true; investigate, make choices and manage stamina and injuries. Three injuries eliminate a player.

### Step-by-step walkthrough

1. Each run generates a scenario appropriate for the number of players. At the start you receive several rules, but some may be misleading or only correct in a particular context.
2. Starting locations may be shared or separate. Progress through personal and group events, choose actions, and inspect the map, notes, doors, and supplies. Free-form interactions must fit your location and known clues.
3. Manage stamina by finding food and other resources. The bot describes injuries without exposing a numerical health bar; three injuries eliminate you. Once exit conditions are met, each player may escape independently.

### Winning and scoring

Escape individually after meeting clue and exit conditions; multiplayer rankings prioritize the number who escape.

### Essential commands

- `/GameXXXVII 创建`
- `/选择 A`
- `/互动 查看 地图`
- `/互动 搜索 补给`
- `/互动 推门`

**Full rules in the bot：** `/GameXXXVII 规则`

---

## Game XXXVIII · ♠️8 UNLOCK {#game-xxxviii}

**Players：** 2–5 players

### Game overview

Each player gets two attempts. Choose a 1–5 point difficulty, wait seven seconds, and reproduce the shown digit string within the time limit. Higher levels are harder.

### Step-by-step walkthrough

1. Each player has only two scored attempts, so decide whether reliable lower levels or risky higher levels suit your strategy. Before each attempt, choose a difficulty worth 1–5 points.
2. After selection there is a seven-second preparation period. Only then does the bot reveal a random four- to six-digit code. Timing starts when the code appears, not at the beginning of preparation.
3. Enter the code perfectly before that level’s deadline. Incorrect or late attempts score zero. Average both attempts; tied leaders race on an untimed five-point code to decide the winner.

**Five difficulty levels**

| Points | Digits | Time limit |
|:--:|:--:|:--:|
| 1 | 4 | 5.0s |
| 2 | 4 | 4.5s |
| 3 | 5 | 4.5s |
| 4 | 6 | 5.0s |
| 5 | 6 | 4.0s |

### Winning and scoring

Highest average across two attempts wins; tied leaders race to solve an untimed five-point code.

### Essential commands

- `/GameXXXVIII 创建`
- `/GameXXXVIII 难度 5`
- `/GameXXXVIII 解锁 数字`
- `/GameXXXVIII 周榜`

**Full rules in the bot：** `/GameXXXVIII 规则`

---
