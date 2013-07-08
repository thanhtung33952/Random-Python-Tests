from random import randint

abuseList = ["\nYou smack yourself hard on the forehead.",
            "\nYou punch yourself in the stomach.",
            "\nYou poke yourself in the eye.",
            "\nYou pinch yourself on the leg.",
            "\nYou hold your breath until you pass out."]

def abuseRandom():
    print(abuseList[randint(0, 4)])

def outPinch():
    print(abuseList[3])

def outHold():
    print(abuseList[4])

def outHit():
    print(abuseList[0])
    
def outPunch():
    print(abuseList[1])

def outPoke():
    print(abuseList[2])

funcOutDict = {"hit" : outHit, "punch" : outPunch, "poke" : outPoke,
                "pinch" : outPinch, "" : abuseRandom}


def main():
    print("The self-abuse helper command line interface...\n"
        "Type q to quit or press enter for a random abuse.\n")
    print("You are depressed and self abusive.\n")
    cont = True
    while(cont):
        selection = input('\nDo you want to hit, punch, poke, or pinch?: ')
        if selection == 'q': # quick and dirty way to give the user a way out
            print("\nYou feel slightly better after you regain conciousness.\n")
            cont = False
        elif selection in funcOutDict.keys():
            funcOutDict[selection]()
        else:
            print ('\nThat\'s where I draw the line buddy! Enter q to quit'
                    ' or press enter for a random abuse.')

main()
