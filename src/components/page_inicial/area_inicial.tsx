import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { IniciaBotao } from "./botao_inicial"

export const AreaInicial = () => {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Pesquisa de satisfação</CardTitle>
                <CardDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam sed lorem ac mi facilisis accumsan vel non mi. Cras pretium efficitur justo quis tincidunt.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <IniciaBotao />
            </CardContent>

        </Card>

    )
}