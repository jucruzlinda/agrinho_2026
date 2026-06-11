🌎 O que é o Regenera Terra?
Criei o Regenera Terra como uma experiência interativa para mostrar como a tecnologia e a ecologia podem andar juntas no futuro da agricultura. Em vez de ser só mais uma página estática com textos longos, a ideia é guiar quem está navegando por uma verdadeira jornada pelas camadas do nosso ecossistema — indo lá do topo da atmosfera até as profundezas do subsolo.

🕹️ O que dá para fazer no site?
Navegação imersiva (Scroll Visual): Conforme você vai descendo a página pelas seções (Atmosfera, Dossel, Solo e Subsolo), as cores do fundo mudam sozinhas e de forma suave. Isso dá a sensação real de que estamos afundando na terra.

Mecânica de impacto ambiental: Coloquei um "Termômetro do Equilíbrio" fixo na tela. Se o usuário clica em ações positivas (como usar biofertilizantes ou sensores de precisão), a pontuação sobe e o termômetro brilha em verde. Se escolher caminhos prejudiciais (como monocultura ou pesticidas químicos), a barra cai e acende um alerta vermelho.

Cápsula do tempo para 2050: Lá no final, quem acessa pode deixar uma mensagem ou conselho para os agricultores do futuro. Ao enviar, o formulário some com uma animação bem fluida e os dados ficam guardados no navegador.

Certificado digital em tempo real: Depois de enviar a mensagem, o site gera na hora um certificado personalizado com o nome da pessoa e a data de hoje, prontinho para ser impresso ou salvo.

🛠️ Por trás do código
Para construir o projeto, usei apenas a base clássica da web para garantir que ficasse leve e rápido:

HTML5: Para organizar a estrutura de forma limpa e semântica.

CSS3 moderno: Usei bastante o conceito de Glassmorphism (aquele efeito de vidro fosco bem moderno nos cards) e fiz o design ser 100% responsivo para funcionar direitinho no celular ou no computador.

JavaScript Puro: Toda a inteligência da página roda aqui. Desde a mudança automática das cores de fundo (usando o IntersectionObserver), passando pelas contas do termômetro, até o salvamento dos dados da cápsula do tempo no localStorage e a lógica de impressão do certificado.
