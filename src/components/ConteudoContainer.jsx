import React from 'react'
import styles from '../styles/ConteudoContainer.module.css'
import icon from '../images/Icon.svg'
import arrow from '../images/arrow.svg'

export default function ConteudoContainer(props) {

    const renderDescricao = () => {
        switch (props.selectedIndex) {
            case 0:
                return (
                    <div className={styles.conteudo}>

                        <div className={styles.grid6}>

                        <div className={styles.descricaoContainer}>
                                <div className={styles.descricaoTitulo}>
                                    <img src={arrow} className={styles.arrow} />
                                    <div>10:00 - Abertura do evento</div>
                                </div>
                                <div className={styles.descricao}>
                                <p>Local: Auditório da Elétrica</p>
                                </div>
                            </div>
                            
                            <div className={styles.descricaoContainer}>
                                <div className={styles.descricaoTitulo}>
                                    <img src={arrow} className={styles.arrow} />
                                    <div>11:00 - Palestra</div>
                                </div>
                                <div className={styles.descricao}>

                                <b>Disrupção Tecnológica no Mercado Agrícola</b>
                                <i>Helton Franco de Sousa (UNIFEI)</i>

                                <p>Quais as principais tecnologias que estão revolucionando o mercado agrícola e que irão fazer do Brasil o grande celeiro de tecnologias do agro.</p>
                                <p>Local: Auditório da Elétrica</p>
                                </div>
                            </div>

                            <div className={styles.descricaoContainer}>
                                <div className={styles.descricaoTitulo}>
                                    <img src={arrow} className={styles.arrow} />
                                    <div>14:00 - Palestra </div>
                                </div>
                                <div className={styles.descricao}>

                                <b>Carreira em Games</b>
                                <i>Fred Augusto Laranjo Silva (Aquiris Game Studio)</i>

                                <p>Conversaremos sobre os diversos pontos que foram importantes no desenvolvimento profissional no mercado tradicional, falaremos do mercado de jogos, dos papéis que podem ser desempenhados, do processo seletivo, do dia-a-dia e teremos bastante espaço para perguntas e discussões.</p>
                                <p>Local: Auditório da Elétrica</p>
                                </div>
                            </div>

                            <div className={styles.descricaoContainer}>
                                <div className={styles.descricaoTitulo}>
                                    <img src={arrow} className={styles.arrow} />
                                    <div>15:00 - Palestra</div>
                                </div>
                                <div className={styles.descricao}> 

                                

                                <b>A cultura de trabalho em empresas de tecnologia da região de São Francisco, EUA</b>
                                <i>Tiago Romero Garcia (Pinterest)</i>

                                <p>Apresentação de como é ser brasileiro e trabalhar em empresas de tecnologia na região da área da baía de São Francisco nos EUA. Exploraremos questões como expectativas, crescimento de carreira, compensação, inclusão & diversidade, experimentação, e como é viver nessa realidade.</p>
                                <p>Local: Auditório da Elétrica</p>
                                </div>
                            </div>

                            <div className={styles.descricaoContainer}>
                                <div className={styles.descricaoTitulo}>
                                    <img src={arrow} className={styles.arrow} />
                                    <div>16:30 - Palestra</div>
                                </div>
                                <div className={styles.descricao}>
                                

                                <b>Pega e EY - Build for Change</b>
                                <i>Darryl Dunnington (Pega), Priscila Engiel (EY) e Sergio Viola</i>

                                <p>A PegaSystems é uma das líderes de mercado no que tange o desenvolvimento de sistemas corporativos. Para isso, ela disponibiliza a Plataforma Pega Academy com vários módulos que visam o desenvolvimento orientado à modelo, low-code, metodologias Scrum, Design Thinking, bem como o uso de Computação em Nuvem, Inteligência Artificial, Sistemas Web e Mobile, entre outros. O objetivo da palestra é apresentar à comunidade UNIFEI o Programa Acadêmico Pega, encorajar os alunos a realizarem o curso System Architect Essentials 8.6 (vouchers são disponibilizados aos alunos que realizam o curso para tentativa de certificação), e apresentar oportunidades na Ernst & Young (EY).</p>
                                <p>Local: Auditório da Elétrica</p>
                                </div>
                            </div>

                            <div className={styles.descricaoContainer}>
                                <div className={styles.descricaoTitulo}>
                                    <img src={arrow} className={styles.arrow} />
                                    <div>19h30 - Minicurso</div>
                                </div>
                                <div className={styles.descricao}>

                                    <b>Keep Calm and Visualize Your Data (online)</b>
                                    <i>Bárbara Pimenta Caetano (UFRJ)</i>
                                    <p>Nos últimos anos, os Sistemas de Informação têm sido marcados pelo excesso de dados disponíveis aos usuários.Técnicas de Visualização de Informação são comumente empregadas para facilitar a análise e o entendimento dos dados.Contudo, a constante evolução da tecnologia cria diferentes oportunidades de representação dos dados, o que podedificultar a elaboração de visualizações realmente úteis que sejam compatíveis com o propósito da análise. A proposta aqui éapresentar uma abordagem prática que concilia a literatura em visualização de informação e os diversos recursosdisponíveis na construção de representações gráficas de dados que sejam facilitadoras para o processo decisório.</p>
                                </div>
                            </div>
                        </div>    

                    </div>
                )
                break;
            case 1:
                return (
                    <div className={styles.grid6}>
                            <div className={styles.descricaoContainer}>
                                <div className={styles.descricaoTitulo}>
                                    <img src={arrow} className={styles.arrow} />
                                    <div>10:00 - Palestra</div>
                                </div>
                                <div className={styles.descricao}>
                                <b>O Ecossistema de Empreendedorismo e Inovação Itajubá HardTech</b>
                                <i>Maurício de Pinho Bitencourt (INOVAI)</i>
                                <p>Vem conhecer o Silicon Valley da Serra da Mantiqueira! Nesta palestra será apresentado o HardTech,o ecossistema de empreendedorismo e inovação de Itajubá. Os(as) participantes poderão conhecer os benefícios de ser parte deste ecossistema regional para transformar suas ideias de projetos, Apps, e outros softwares desenvolvidos em projetos de disciplinas, IC, TCC, ou como resultados das pesquisas, em produtos/serviços no mercado nacional e internacional.</p>
                                <p>Local: Auditório da Elétrica</p>
                                </div>
                            </div>

                            <div className={styles.descricaoContainer}>
                                <div className={styles.descricaoTitulo}>
                                    <img src={arrow} className={styles.arrow} />
                                    <div>11:00 - Palestra</div>
                                </div>
                                <div className={styles.descricao}>
                               
                                <b>FARO Technologies, computer graphics trends and applications in the field of Architecture, Engineeringand Construction</b>
                                <i>Marco Centin (FARO Technologies)</i>
                                <p>Nesta palestra queremos apresentar-lhes a FARO Technologies, descrevendo a empresa, suas equipes de valores e seu campo de atuação. Nós nos debruçamos sobre as tendências recentes onde a computação gráfica e a computação em nuvem estão se tornando a parte central de muitos fluxos de trabalho nas áreas de Engenharia de Arquitetura e Construção (AEC) e Modelagem de Informação para Construção (BIM). Revisamos as principais tecnologias e habilidades exigidas para que um Engenheiro de Software desenvolva uma carreira neste campo.</p>
                                <p>Local: Auditório da Elétrica</p>
                                </div>
                            </div>

                            <div className={styles.descricaoContainer}>
                                <div className={styles.descricaoTitulo}>
                                    <img src={arrow} className={styles.arrow} />
                                    <div>14:00 - Minicurso</div>
                                </div>
                                <div className={styles.descricao}>
                                
                                <b>C# e Unity: Desenvolvimento de Jogos para Iniciantes</b>
                                <i>Nixon Moreira Silva (UNIFEI)</i>
                                <p>Construir um jogo igual ao clássico "Asteroids" utilizando a Unity e C#.</p>
                                <p>Local: LDC2 / LDC5 (IMC)</p>
                                </div>
                            </div>

                            <div className={styles.descricaoContainer}>
                                <div className={styles.descricaoTitulo}>
                                    <img src={arrow} className={styles.arrow} />
                                    <div>19:00 - Palestra</div>
                                </div>
                                <div className={styles.descricao}>
                                    <b>Como Não Matar as Fadas da Computação</b>
                                    <i>Bárbara Pimenta Caetano (UFRJ) e Anna Luiza Pereira Rosa (UNIFEI)</i>
                                    <p>A morte das fadas é uma metáfora divertida que criamos para alguns erros graves cometidos durante o desenvolvimento de aplicações. A ideia dessa palestra é apresentar alguns desses erros que já vimos acontecer, evidenciar os problemas causados por eles e indicar qual seria a melhor forma para evitá-los.</p>
                                    <p>Local: Salão de Apoio (térreo)</p>
                                </div>
                            </div>

                            <div className={styles.descricaoContainer}>
                                <div className={styles.descricaoTitulo}>
                                    <img src={arrow} className={styles.arrow} />
                                    <div>20:00 - Palestra</div>
                                </div>
                                <div className={styles.descricao}>
                                    <b>Desenvolvimento Mobile. Por onde devo começar?</b>
                                    <i>Jonas Henrique Ribeiro Paula (Lemobs)</i>
                                    <p>Possíveis motivações para a criação de um aplicativo; a diferença, vantagens e desvantagens do desenvolvimento de aplicativo híbrido ou nativo; quais tecnologias e frameworks o mercado está utilizando no desenvolvimento de aplicativos; o que é necessário para iniciar o desenvolvimento; o que devemos levar em consideração no desenvolvimento. como está o mercado atual do desenvolvimento Mobile.</p>
                                    <p>Local: Salão de Apoio (térreo)</p>
                                </div>
                            </div>

                            <div className={styles.descricaoContainer}>
                                <div className={styles.descricaoTitulo}>
                                    <img src={arrow} className={styles.arrow} />
                                    <div>19:00 - Minicurso</div>
                                </div>
                                <div className={styles.descricao}>
                                    <b>Introdução ao Aprendizado de Máquina utilizando a scikit-learn</b>
                                    <i>Flávio Belizário da Silva Mota (INPE)</i>
                                    <p>O minicurso tem como objetivo fornecer uma visão geral dos recursos da biblioteca scikit-learn para a implementação de técnicas de Aprendizado de Máquina, empregando a linguagem Python. Serão apresentados alguns modelos para resolução de problemas e como apresentar os resultados obtidos. Utilizaremos o Google Colab como ambiente de desenvolvimento, possibilitando o compartilhamento e reprodução dos códigos gerados.</p>
                                    <p>Local: LDC2 / LDC5 (IMC)</p>
                                </div>
                            </div>
                        </div>

                )
                break;
            case 2:
                return (
                    <div className={styles.grid6}>
                           <div className={styles.descricaoContainer}>
                                <div className={styles.descricaoTitulo}>
                                    <img src={arrow} className={styles.arrow} />
                                    <div>10:00 - Palestra</div>
                                </div>
                                <div className={styles.descricao}>
                                    <b>Como Não Matar as Fadas da Computação </b>
                                    <i>Bárbara Pimenta Caetano (UFRJ) e Anna Luiza Pereira Rosa (UNIFEI)</i>
                                    <p>A morte das fadas é uma metáfora divertida que criamos para alguns erros graves cometidos durante o desenvolvimento de aplicações. A ideia dessa palestra é apresentar alguns desses erros que já vimos acontecer, evidenciar os problemas causados por eles e indicar qual seria a melhor forma para evitá-los.</p>
                                    <p>Local: Salão de Apoio (térreo)</p>
                                </div>
                            </div>

                            <div className={styles.descricaoContainer}>
                                <div className={styles.descricaoTitulo}>
                                    <img src={arrow} className={styles.arrow} />
                                    <div>11:00 - Palestra</div>
                                </div>
                                <div className={styles.descricao}>
                                <b>Sem Limites! A importância da pós-graduação na formação do profissional do futuro</b>
                                <i>Lina Garcés (UNIFEI)</i>
                                <p>A sociedade que conhecemos atualmente não seria possível sem os avanços constantes da ciência. Inclusive, tudo o que você usa no seu dia a dia, seu celular, o computador, a internet, video games, bike/ moto/carro, água potável, produtos das mega empresas líderes do mercado (Google, Amazon, Apple, Tesla, entre outras) foram criados por estudantes curiosos, criativos, apaixonados pelo conhecimento, e com muita vontade de tirar suas ideias do papel e solucionar problemas reais. E você? De que lado da história quer ficar? Vem conhecer como você pode ser um profissional que transforme o futuro, sem precisar sair de casa. ;)</p>
                                <p>Local: Salão de Apoio (térreo)</p>
                                </div>
                            </div>

                            <div className={styles.descricaoContainer}>
                                <div className={styles.descricaoTitulo}>
                                    <img src={arrow} className={styles.arrow} />
                                <div>14:00 - Minicurso</div>
                                </div>
                                <div className={styles.descricao}>
                                    <b>Introdução ao Flutter: Crie aplicativos para qualquer tela </b>
                                    <i>Marcos Barbosa (UNIFEI)</i>
                                    <p>Entre de vez para o desenvolvimento de aplicações multiplataforma, ganhe tempo de desenvolvimento (curva de aprendizagem alta) e aproveite todas as vantagens de um framework cada vez mais consolidado no mercado, o Flutter.</p>
                                    <p>Local: LDC2 / LDC5 (IMC)</p>
                                </div>
                            </div>

                            <div className={styles.descricaoContainer}>
                                <div className={styles.descricaoTitulo}>
                                    <img src={arrow} className={styles.arrow} />
                                <div>14:00</div>
                                </div>
                                <div className={styles.descricao}>
                                <b>Acompanhamento Game Jam "D3 Mini" (online)</b>
                                </div>
                            </div>

                            <div className={styles.descricaoContainer}>
                                <div className={styles.descricaoTitulo}>
                                    <img src={arrow} className={styles.arrow} />
                                <div>16:30 - Palestra</div>
                                </div>
                                <div className={styles.descricao}>
                                <b>Cloud computing no mundo da logística</b>
                                <i>Heron Yugo Inouye (Comprovei)</i>
                                <p>Como a Comprovei foi de Startup para uma das maiores empresas de tech em logística do Brasil usando Cloud.</p>
                                <p>Local: Salão de Apoio (térreo)</p>
                                </div>
                            </div>

                            <div className={styles.descricaoContainer}>
                                <div className={styles.descricaoTitulo}>
                                    <img src={arrow} className={styles.arrow} />
                                <div>17:30 - Palestra</div>
                                </div>
                                <div className={styles.descricao}>
                                <b>Postman no dia a dia de um desenvolvedor</b>
                                <i>Hélder Garcia Santos (LEVTY)</i>
                                <p>O que você sabe sobre Postman? Nesta palestra pretende-se fazer uma introdução ao uso da ferramenta Postman e todas as facilidades que esta promove. Dentro disso serão feitas abordagens sobre apresentação e explicação de tipos de requisição, tipos de autorização, acesso a API's externas, organização do ambiente e testes em tempo real. Além disso, também veremos sobre documentação e publicação de informações junto a plataforma. </p>
                                <p>Local: Salão de Apoio (térreo)</p>
                                </div>
                            </div>

                            <div className={styles.descricaoContainer}>
                                <div className={styles.descricaoTitulo}>
                                    <img src={arrow} className={styles.arrow} />
                                    <div>19:00 - Palestra</div>
                                </div>
                                <div className={styles.descricao}>

                                    <b>Geoinformática: conceitos e aplicações </b>
                                    <i>Vanessa Cristina Oliveira de Souza (UNIFEI)</i>
                                    <p>A informação geográfica ganhou destaque nos últimos anos, tanto pela popularização dos smartphones com GPS embarcado e consequente aplicativos que surgiram a partir dessa tecnologia, quanto pelo avanço em tecnologias espaciais. Nessa palestra, vamos entender o que é geoinformática e como a computação é importante para essa área em expansão.</p>
                                    <p>Local: Salão de Apoio (térreo)</p>
                                </div>
                            </div>

                            <div className={styles.descricaoContainer}>
                                <div className={styles.descricaoTitulo}>
                                    <img src={arrow} className={styles.arrow} />
                                    <div>20:00 - Palestra</div>
                                </div>
                                <div className={styles.descricao}>
                                    <b>Introdução ao Docker</b>
                                    <i>Guilherme Augusto Ferreira (UNIFEI)</i>
                                    <p>O Docker é uma tecnologia de fundamental importância para o desenvolvimento e entrega de produtos de software, sendo hoje considerado um conhecimento valioso e um diferencial para o mercado de trabalho. O intuito da palestra ‘Introdução ao Docker’ é evidenciar o quão importante o Docker é para a área de TI atualmente e, principalmente apresentar exemplos de uso para que o ouvinte comece a pensar na solução de um problema do ponto de vista do Docker.</p>
                                    <p>Local: Salão de Apoio (térreo)</p>
                                </div>
                            </div>

                            <div className={styles.descricaoContainer}>
                                <div className={styles.descricaoTitulo}>
                                    <img src={arrow} className={styles.arrow} />
                                    <div>19:00 - Minicurso</div>
                                </div>
                                <div className={styles.descricao}>
                                    <b>Desenvolvimento Web: Aprendendo a Criar um Portfólio do Zero</b>
                                    <i>Ana Maísa do Nascimento Santos (UNIFEI)</i>
                                    <p>O minicurso abordará conhecimentos básicos da programação web. Nele, um site (portfólio) será criado com HTML e CSS de forma didática com o intuito de ensinar aqueles que não possuem conhecimento nessa área a desenvolver uma aplicação web simples.</p>
                                    <p>Local: LDC2 / LDC5 (IMC)</p>
                                </div>
                            </div>
                        </div>
                )
                break;
            case 3:
                return (
                    <div className={styles.grid6}>
                            <div className={styles.descricaoContainer}>
                                <div className={styles.descricaoTitulo}>
                                    <img src={arrow} className={styles.arrow} />
                                    <div>10:00 - Palestra</div>
                                </div>
                                <div className={styles.descricao}>
                                    <b>Desafios e Oportunidades da Carreira Acadêmica</b>
                                    <i>Rafael Gomes Braga (UNIFEI)</i>
                                    <p>Local: Salão de Apoio (térreo)</p>
                                </div>
                            </div>

                            <div className={styles.descricaoContainer}>
                                <div className={styles.descricaoTitulo}>
                                    <img src={arrow} className={styles.arrow} />
                                    <div>11:00 - Palestra</div>
                                </div>
                                <div className={styles.descricao}>
                                    <b>Um pouco sobre Analytics Engineering </b>
                                    <i>Bianca da Rocha Bartolomei (Zippi)</i>
                                    <p>Analytics Engineering é uma área bastante recente dentro de dados e que possui desafios muito interessantes.Nessa palestra, conversaremos sobre o contexto dessa área, a "stack de dados moderna" (ETL x ELT) e qual o papel que um analytics engineer desempenha.</p>
                                    <p>Local: Salão de Apoio (térreo)</p>
                                </div>
                            </div>

                            <div className={styles.descricaoContainer}>
                                <div className={styles.descricaoTitulo}>
                                    <img src={arrow} className={styles.arrow} />
                                    <div>14:00 - Mini-evento</div>
                                </div>
                                <div className={styles.descricao}>
                                    <b>1ª Maratona de Programação para Meninas da UNIFEI! </b>
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfNM74sY19qD5jjN2dV1AafmecejjHiSW5h0vQytNZk0cpSqA/viewform" target='_blank'>Formulário de inscrição</a>
                                    <p>Local: LDC5</p>
                                </div>
                            </div>

                            <div className={styles.descricaoContainer}>
                                <div className={styles.descricaoTitulo}>
                                    <img src={arrow} className={styles.arrow} />
                                    <div>14:00 - Exposição</div>
                                </div>
                                <div className={styles.descricao}>
                                    <b>Jogos da Dev-U e Game Jam "D3 Mini" </b>
                                    <p>Local: LDC2</p>
                                </div>
                            </div>

                            <div className={styles.descricaoContainer}>
                                <div className={styles.descricaoTitulo}>
                                    <img src={arrow} className={styles.arrow} />
                                    <div>16:30 - Palestra</div>
                                </div>
                                <div className={styles.descricao}>
                                    <b>Federated Learning em Segurança </b>
                                    <i>Lourenço Alves Pereira Júnior (ITA)</i>
                                    <p>Local: Salão de Apoio (térreo)</p>
                                </div>
                            </div>

                            <div className={styles.descricaoContainer}>
                                <div className={styles.descricaoTitulo}>
                                    <img src={arrow} className={styles.arrow} />
                                    <div>17:30 - Palestra</div>
                                </div>
                                <div className={styles.descricao}>
                                    <b>Ética no Ambiente de Trabalho do Profissional da Computação </b>
                                    <i>Edmilson Marmo Moreira (UNIFEI)</i>
                                    <p>Local: Salão de Apoio (térreo)</p>
                                </div>
                            </div>

                            <div className={styles.descricaoContainer}>
                                <div className={styles.descricaoTitulo}>
                                    <img src={arrow} className={styles.arrow} />
                                    <div>19:00 - Palestra</div>
                                </div>
                                <div className={styles.descricao}>
                                    <b>DevOps e Tendências em TI</b>
                                    <i>Bruno Yuji Lino Kimura (UNIFESP)</i>
                                    <p>A Internet foi implementada há mais 40 anos tendo em mente dezenas de computadores interconectados por cabos para compartilhar recursos entre usuários mutuamente confiáveis. Hoje, com uma arquitetura que pouco se alterou ao longo dessas décadas, bilhões de usuários de perfis heterogêneos e com diferentes práticas e intenções de uso estão  multi-conectados praticamente em qualquer lugar e momento às redes de acesso. Neste palestra, aspectos tecnológicos da evolução da Internet serão apresentados, considerando o contexto histórico da Web (1.0, 2.0 e 3.0), limitações e desafios para o transporte eficiente de dados, bem como perspectivas e oportunidades para o futuro com as próximas gerações de redes móveis B5G e 6G.
</p>
                                    <p>Local: Salão de Apoio (térreo)</p>
                                </div>
                            </div>

                            <div className={styles.descricaoContainer}>
                                <div className={styles.descricaoTitulo}>
                                    <img src={arrow} className={styles.arrow} />
                                    <div>20:00</div>
                                </div>
                                <div className={styles.descricao}>
                                    <b>Premiação - da 1ª Maratona de Programação para Meninas da UNIFEI!</b>
                                    
                                </div>
                            </div>

                            <div className={styles.descricaoContainer}>
                                <div className={styles.descricaoTitulo}>
                                    <img src={arrow} className={styles.arrow} />
                                    <div>21:00 - Bate-papo</div>
                                </div>
                                <div className={styles.descricao}>
                                    <b>Astro (4.@) Física </b>
                                    <i>Alan Bendasoli Pavan (UNIFEI) e Hektor Sthenos Alves Monteiro (UNIFEI)</i>
                                    <p> Neste bate-papo mostraremos como algumas das tecnologias 4.0, tais como Computação na Nuvem, Inteligência Artificial, Big Data e Ciência de Dados têm impactado as pesquisas em ciências básicas, mais especificamente, a Astrofísica e a Física.</p>
                                    <p>Local: Deck Only Brasil</p>
                                </div>
                            </div>
                           
                        </div>
                )
                break;
            case 4:
                return (
                    <div className={styles.grid6}>
                            <div className={styles.descricaoContainer}>
                                <div className={styles.descricaoTitulo}>
                                    <img src={arrow} className={styles.arrow} />
                                    <div>10:00 - Palestra</div>
                                </div>
                                <div className={styles.descricao}>

                                    <b>Como Low Code / Mendix esta ajudando na Digitalização</b>
                                    <i>Marcelo Penninck (Siemens)</i>

                                    <p>Com a grande demanda de desenvolvimento de soluções digitais, surgiu a necessidade de entregar soluções de maneira ágil, assim o low-code ganhou um grande destaque no mercado global. A ideia é entender como o  low-code pode ajudar na digitalização dentro das empresas.</p>
                                    <p>Local: Salão de Apoio (térreo)</p>
                                </div>
                            </div>

                            <div className={styles.descricaoContainer}>
                                <div className={styles.descricaoTitulo}>
                                    <img src={arrow} className={styles.arrow} />
                                    <div>11:00 - Palestra</div>
                                </div>
                                <div className={styles.descricao}>

                                    <b>Sendo Sexy para o Mercado: entrando no mercado de dev, crescendo e procurando vagas internacionais </b>
                                    <i>Paulo Antonio Cerávolo Rodrigues (Globant)</i>

                                    <p>Dicas e overview do mercado de desenvolvimento de software, dicas para quem quer entrar e quem quer mudar de emprego, progressão de carreira e como ter acesso às vagas internacionais.</p>
                                    <p>Local: Salão de Apoio (térreo)</p>
                                </div>
                            </div>

                            <div className={styles.descricaoContainer}>
                                <div className={styles.descricaoTitulo}>
                                    <img src={arrow} className={styles.arrow} />
                                    <div>12:00</div>
                                </div>
                                <div className={styles.descricao}>
                                <b>Cerimônia de encerramento - SEPROG 2022</b>
                                <p>Local: Salão de Apoio (térreo)</p>
                                   
                                </div>
                            </div>

                            <div className={styles.descricaoContainer}>
                                <div className={styles.descricaoTitulo}>
                                    <img src={arrow} className={styles.arrow} />
                                    <div>14:00 - Minicurso</div>
                                </div>
                                <div className={styles.descricao}>
                                    <b>Processamento de Imagens aplicado à Drones (online)</b>
                                    <i>Equipe Black Bee Drones (UNIFEI)</i>                                    
                                    <p>Aplicações práticas de processamento de imagens usando a linguagem Python e a biblioteca OpenCV.</p>
                                </div>
                            </div>

                            <div className={styles.descricaoContainer}>
                                <div className={styles.descricaoTitulo}>
                                    <img src={arrow} className={styles.arrow} />
                                    <div>20:00 - Bate-papo</div>
                                </div>
                                <div className={styles.descricao}>
                                    <b>Papo de Dev: Roda de conversa sobre o mercado de trabalho e seus desafios </b>
                                    <i>Paulo Antonio Cerávolo Rodrigues e Celso Fernandes</i>
                                    <p>Local: Jybá Beergarden</p>
                                </div>
                            </div>
                            

                        </div>
                )
                break;
        }
    }

  return (
    <div>
        <div className={styles.conteudoContainer}>
            {renderDescricao()}
        </div>
    </div>
  )
}
