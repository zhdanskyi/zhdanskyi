import os
import re
import unicodedata

def clean_comment(match):
    comment = match.group(0)
    # remove tildes/accents
    comment = ''.join(c for c in unicodedata.normalize('NFD', comment) if unicodedata.category(c) != 'Mn')
    # lowercase
    comment = comment.lower()
    # basic translations
    trans_map = {
        "header & profile": "cabecera y perfil",
        "navigation bar": "barra de navegacion",
        "terminal chatbot": "chatbot terminal",
        "footer": "pie de pagina",
        "animated language selector (terminal style)": "selector de idioma animado estilo terminal",
        "i18n fade animation": "animacion desvanecido i18n",
        "sub-page top navigation (strict separation)": "navegacion superior sub-pagina separacion estricta",
        "global reset & vars": "reinicio global y variables",
        "double gradient frame (refined)": "marco de doble gradiente refinado",
        "outer line": "linea exterior",
        "inner line": "linea interior",
        "hub page": "pagina hub",
        "tighter constraint": "restriccion mas ajustada",
        "forced center": "centro forzado",
        "left col: portrait": "columna izquierda retrato",
        "right col: menu": "columna derecha menu",
        "ensure full width for footer containment": "asegurar ancho completo para contener el pie",
        "sub-pages": "sub-paginas",
        "kept for title alignment if needed, but navigation moved to .sub-nav": "mantenido para alineacion de titulo si es necesario pero navegacion movida a sub-nav",
        "cards": "tarjetas",
        "timeline": "linea de tiempo",
        "contact form": "formulario de contacto",
        "cv sections": "secciones de cv",
        "responsive": "adaptable",
        "keep row": "mantener fila",
        "ensure it stays small on mobile in subnav": "asegurar tamano pequeno en movil en subnav",
        "scanlines effect": "efecto de lineas de escaneo",
        "remove padding as sub-nav handles it": "eliminar padding ya que sub-nav lo maneja",
        "override fixed positioning when inside sub-nav": "sobrescribir posicionamiento fijo dentro de sub-nav",
        "add to existing global styles": "agregar a estilos globales existentes"
    }
    for eng, esp in trans_map.items():
        if eng in comment:
            comment = comment.replace(eng, esp)

    content = comment[2:-2].strip()
    # remove special chars except letters, numbers, spaces, basic punctuation usually okay but user explicitly said "sin caracteres especiales". 
    # allow hyphens and equal signs for formatting like "==="
    content = re.sub(r'[^a-z0-9\s\-=\>\<\+]', ' ', content)
    # squash multiple spaces
    content = re.sub(r'\s+', ' ', content).strip()
    return f"/* {content} */"

def clean_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        text = f.read()
    
    # css block comments
    text = re.sub(r'/\*.*?\*/', clean_comment, text, flags=re.DOTALL)
    
    # js inline comments
    def clean_js_comment(match):
        comment = match.group(0)
        comment = ''.join(c for c in unicodedata.normalize('NFD', comment) if unicodedata.category(c) != 'Mn')
        comment = comment.lower()
        content = comment[2:].strip()
        content = re.sub(r'[^a-z0-9\s\-=\>\<\+]', ' ', content)
        content = re.sub(r'\s+', ' ', content).strip()
        return f"// {content}"
        
    if path.endswith('.js'):
        text = re.sub(r'//.*', clean_js_comment, text)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(text)

files = [
    r"c:\Users\vital\Desktop\IT\HTML+CSS\zhdanskyi\css\matrix.css",
    r"c:\Users\vital\Desktop\IT\HTML+CSS\zhdanskyi\css\style.css",
    r"c:\Users\vital\Desktop\IT\HTML+CSS\zhdanskyi\js\logic.js",
    r"c:\Users\vital\Desktop\IT\HTML+CSS\zhdanskyi\js\background.js"
]

for file in files:
    clean_file(file)

print("done")
