deck = []
tipos = ['C','D','H','S']
especiales = ['A','J','Q','K']
def crearBaraja():
    for i in range(2,11):
        for tipo in tipos:
            deck.append(f'{i}{tipo}')
    for especial in especiales:
        for tipo in tipos:
            deck.append(f'{especial}{tipo}')
    return deck
print(crearBaraja())