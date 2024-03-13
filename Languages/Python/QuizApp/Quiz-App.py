#Quizgame

#Used https://www.youtube.com/watch?v=zehwgTB0vV8 as guidance

#Question Tuple with input
questions = ("What is the capital of France?",
             "What is the capital of Germany?", 
             "What is the capital of Italy?",
             "What is the capital of Spain?")

#answer options for question tuple
options = (("A. Paris", "B. London", "C. Berlin", "D. Madrid"),
           ("A. Berlin", "B. Madrid", "C. London", "D. Paris"),
           ("A. Madrid", "B. London", "C. Paris", "D. Berlin"),
           ("A. London", "B. Paris", "C. Berlin", "D. Madrid"))

answers = ("A", "A", "A", "A")
guesses = []
score = 0
questions_init = 0

for question in questions:
    print(question)
    for option in options[questions_init]:
        print(option)
    
    guess= input("Enter (A, B, C, or D): ").upper()
    guesses.append(guess)
    if guess == answers[questions_init]:
        score += 1
        print("Correct!")
    else:
        print("Wrong!")
        print(f"The correct answer is {answers[questions_init]}")
    questions_init += 1

print("Results:")
print("Answers: ", end="")
for answer in answers:
    print(answer, end=" ")
print()

print("Guesses: ", end="")
for guess in guesses:
    print(guess, end=" ")
print()

score = int(score/len(questions) * 100)
print(f"Your score is {score}%")
