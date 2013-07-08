def outHit():
    print("\nYou smack yourself on the forehead!")
    
def outPunch():
    print("\nYou punch yourself in the stomach!")

def outPoke():
    print("\nYou poke yourself in the eye!")

funcOutDict = {"hit" : outHit, "punch" : outPunch, "poke" : outPoke}


def main():
    print("The self-abuse helper command line interface...\n"
        "Type q to quit.\n")
    print("You are depressed and self abusive.\n")
    cont = True
    while(cont):
        selection = input('\nDo you want to hit, punch, or poke?: ')
        if selection == 'q': # quick and dirty way to give the user a way out
            print("\nYou feel slightly better after you regain conciousness.\n")
            cont = False
        elif selection in funcOutDict.keys():
            funcOutDict[selection]()
        else:
            print ('Enter q to quit.')

main()
