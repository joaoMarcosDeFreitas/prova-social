//propriedades do componente texto.
interface TextProps {
    text: string;
    //só aceita valores com px
    fontSize?: string;
    fontColor?: string;
    fontFamily?: 'lato' | 'montserrat';
    type?: 'h1' | 'h2' | 'h3' | 'p';
    underline?: "underline" | "no-underline";
    height?: 'h-min';
}

//retorna a TAG texto (seu tipo {título, paragrafo...} são definidos por 'type')
export function Text({text = "Insira seu texto", fontSize = "20px", fontColor = "white", fontFamily = "lato", type = "h1", underline = "no-underline", height = "h-min"}: TextProps) {
    //verifica se o tamanho é mandado em pixels, se não define como padrão de 20px.
    if(!fontSize.includes("px")) { 
        fontSize = "20px";
    }
    
    //define a tag usada.
    const Tag = type;

    //retorna a TAG com sua estilização
    return(
        <Tag 
            className={`${underline} ${height}`}
            style= {{
                fontSize: fontSize,
                color: fontColor,
                fontFamily: `var(--font-${fontFamily})`
            }}>{text}</Tag>
    );
}