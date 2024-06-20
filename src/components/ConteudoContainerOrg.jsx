import React, { Component } from 'react';
import styles from '../styles/ConteudoContainerOrg.module.css'

export default function ConteudoContainerOrg(props) {
  const renderSlider = () => {
      switch(props.selectedIndex) {
        case 0:
          return (
            <div className={styles.grid6}>
              
              <div className={styles.externo}>
                <div className={styles.interno}>
                    <div className={styles.participanteNome}>Helton Franco de Sousa</div>
                    <div className={styles.participanteConteudo}>Formado em Engenharia da Computação e mestre em Mineração de Dados pela Universidade Federal de Itajubá. Durante sua graduação, participou ativamente do grupo de Veículos Aéreos não Tripulados e da Equipe Uai!rrior de Robótica, onde foi campeão mundial duas vezes representando o Brasil! É board-Member da 4LAB Centro de Pesquisa e Desenvolvimento em Internet das Coisas. Em 2017, fundou a Irricontrol com o objetivo de solucionar os problemas relacionados à irrigação de pivôs centrais. Em 2019, a Irricontrol é adquirida pelo Grupo Bauer e assume o cargo de CMO para expansão das operações nacionais e internacionais da Irricontrol.</div>
                </div>
              </div>
  
              <div className={styles.externo}>
                <div className={styles.interno}>
                    <div className={styles.participanteNome}>Fred Augusto Laranjo Silva</div>
                    <div className={styles.participanteConteudo}>Possui 30 anos e é natural de Oliveira-MG. Formado Bacharel em Sistemas de Informação pela FAI-MG (2013) e Pós graduado Especialista em Desenvolvimento de Aplicativos para Dispositivos Móveis e Cloud Computing pelo Inatel (2017). Trabalhou nos últimos 11 anos com desenvolvimento e arquitetura de software, grande parte desses liderando e gerenciando equipes de alta performance, para clientes nacionais e internacionais e parceiros de diversos ramos, na Compels Informática e no Inatel. Em 2021 pôde migrar para a carreira sempre sonhada por ele, indústria de games, na Aquiris Game Studio!</div>
                </div>
              </div>
  
              <div className={styles.externo}>
                <div className={styles.interno}>
                    <div className={styles.participanteNome}>Tiago Romero Garcia</div>
                    <div className={styles.participanteConteudo}>Bacharel em Ciência da Computação pela UNIFEI e Pós-graduado em Arquitetura de Sistemas Distribuídos pela PUC-MG. Hoje atua como Líder Técnico na organização de Monetização na Pinterest, com 15 anos de experiência no mercado de trabalho de tecnologia, dando ênfase ao desenvolvimento de sistemas full-stack.</div>
                </div>
              </div>

              <div className={styles.externo}>
                <div className={styles.interno}>
                    <div className={styles.participanteNome}>Darryl Dunnington, Priscila Engiel e Sergio Viola</div>
                    <div className={styles.participanteConteudo}>
                    <p> Darryl Dunnington is the Director of ILT Technical Curriculum and Enablement for Pegasystems. He supports the Pega University Academic Program thru his focus on the global growth of the Pega ecosystem with certified resources through academic institutions. He is responsible for Pega's global Instructor-Led based curriculum for Pega education, accreditation of university professors, and Authorize Training Partners to teach Pega technology. Darryl graduated from Baylor with a BBA degree in Computer Information Systems, Marketing, and Quantitative Analysis. He completed his MBA degree from the University of Phoenix. Darryl has worked in the Information Technology industry since 1983. He also served as President of the Technology Advisory Board of North Central Texas College.</p> 
 
                    <p>Priscila Engiel é Senior Manager (Technology Consulting Financial Services) com mais de 12 anos de experiência, sendo estes em gestão de processos de negócio, melhoria de processos e análise de requisitos, com grande expertise em serviços financeiros.  Foi a gerente responsável por conduzir a modelagem dos novos processos e detalhamento dos requisitos para a mudança tecnológica de um dos maiores fundos de pensão da América Latina. Tem mestrado com foco em Processos de Negócio e doutorado (duplo diploma) em Requisitos e Compliance. Atualmente é a executiva responsável pelo relacionamento da EY com a Pega.</p>
  
                    <p>Sergio Viola é Senior Manager (Technology Consulting Financial Services) com 15 anos de carreira em TI, possui carreira abordando diversos aspectos do ciclo de vida do desenvolvimento de software e vasta experiência internacional, tendo feito projetos na América do Norte e Europa. Trabalhou como arquiteto de soluções Pega por 3 anos, onde participou de diversos projetos Pega no Brasil e na Europa, nos mercados de seguros e finanças. Trabalhou com Java e outras tecnologias, onde desempenhou papel de arquiteto, desenvolvedor, testador, analista de negócio e gerente de projetos. Possui os seguintes certificados:  Pega CSA, Pega CSSA, PCDC, Oracle OJP Java, ISTQB CTFL, IBM Certified Solution Designer and Capgemini Certified Senior Architect e Pega Certified Business Architect 8.5.</p>
 
                    </div>
                </div>
              </div>
  
              <div className={styles.externo}>
                <div className={styles.interno}>
                    <div className={styles.participanteNome}>Bárbara Pimenta Caetano</div>
                    <div className={styles.participanteConteudo}>Bacharel em Sistemas de Informação (2015) e Mestre (2018) e Doutoranda em Engenharia deSistemas e Computação pela Universidade Federal do Rio de Janeiro. Tem experiência no desenvolvimento de soluçõesweb para business intelligence em diversos cenários. Participou de projetos de pesquisa e extensão na UFRJ e na UNIFEIjunto com a professora Melise, como o VISPUBLICA e em parceria com a empresa Lemobs. Atualmente pesquisa como atecnologia pode impactar na participação pública durante a execução de planos de desenvolvimento urbano em parceria como NEIRU.</div>
                </div>
              </div>

            </div>
          )
          break;
        case 1:
          return (
            <div className={styles.grid6}>

            <div className={styles.externo}>
              <div className={styles.interno}>
                  <div className={styles.participanteNome}>Maurício de Pinho Bitencourt</div>
                  <div className={styles.participanteConteudo}>Graduado em Engenharia pelo INATEL e mestrando em engenharia de Energia, na UNIFEI. É pós-graduado em administração de empresas e controladoria e finanças. Atualmente atua como CEO da Associação Itajubense de Inovação e Empreendedorismo (INOVAI), associação responsável pela gestão dos programas de empreendedorismo e inovação de Itajubá como a INCIT (Incubadora de Empresas de Base Tecnológica, a maior do estado de Minas Gerais!) e o PCTI (Parque Científico e Tecnológico). É líder de Comunidade e facilitador do Ecossistema Itajubá HardTech. Atua como gestor em programas de conexão Startup x Indústria, APLs, Aceleração, Capital de Risco, entre outros.</div>
              </div>
            </div>
            
            <div className={styles.externo}>
              <div className={styles.interno}>
                  <div className={styles.participanteNome}>Marco Centin</div>
                  <div className={styles.participanteConteudo}>Gerente de Engenharia de Software da FARO Technologies, uma empresa tecnológica inovadora dos EUA que opera no campo de medição 3D. Ele lidera uma equipe de engenharia de software de 15 pessoas desenvolvendo soluções inovadoras envolvendo computação gráfica e tecnologias de medição 3D nas áreas de Arquitetura, Engenharia e Construção. Ele se formou em Matemática (MMath) com honras na Universidade de Milão Bicocca e defendeu seu PhD em Engenharia da Informação na Universidade de Brescia. Em sua pesquisa ele se concentrou nas técnicas de Processamento de Geometria para aplicações de alta precisão com foco no Processamento de Malha. Passando de um papel de engenharia de software para a gestão de pessoas, especializou-se em Cultura de Produto, Coaching e Princípios Ágeis.</div>
              </div>
            </div>

            <div className={styles.externo}>
              <div className={styles.interno}>
                  <div className={styles.participanteNome}>Nixon Moreira Silva</div>
                  <div className={styles.participanteConteudo}>Graduando em Sistema de Informação na UNIFEI e Diretor de Programação da Dev-U, projeto de extensão em Competição Tecnológica na área de desenvolvimento de jogos.</div>
              </div>
            </div>

            <div className={styles.externo}>
                <div className={styles.interno}>
                    <div className={styles.participanteNome}>Bárbara Pimenta Caetano e Anna Luiza Pereira Rosa</div>
                    <div className={styles.participanteConteudo}>Bárbara é Bacharel em Sistemas de Informação (2015) e Mestre (2018) e Doutoranda em Engenharia de Sistemas e Computação pela Universidade Federal do Rio de Janeiro. Tem experiência no desenvolvimento de soluções web para business intelligence em diversos cenários. Participou de projetos de pesquisa e extensão na UFRJ e na UNIFEI junto com a professora Melise, como o VISPUBLICA e em parceria com a empresa Lemobs. Atualmente pesquisa como a tecnologia pode impactar na participação pública durante a execução de planos de desenvolvimento urbano em parceria com o NEIRU. Anna Luiza é Graduanda em Ciência da Computação pela Universidade Federal de Itajubá. Tem experiência no desenvolvimento de soluções web para governo eletrônico. Participa do projeto de pesquisa e extensão, coma professora Melise, em parceria com a empresa Lemobs. Atualmente está desenvolvendo o TFG, com a professora Isabela, na área de aprendizado de máquina com ênfase no estudo de redes neurais.</div>
                </div>
              </div>

            <div className={styles.externo}>
              <div className={styles.interno}>
                  <div className={styles.participanteNome}>Flávio Belizário da Silva Mota</div>
                  <div className={styles.participanteConteudo}>Bacharel em Sistemas de Informação (2019) e Mestre em Ciência e Tecnologia da Computação(2021) pela Universidade Federal de Itajubá. Atualmente cursa Doutorado em Computação Aplicada no Instituto Nacional de Pesquisas Espaciais (INPE). Tem experiência no desenvolvimento de soluções para Governo Eletrônico, com foco em Inteligência Artificial e Aprendizado de Máquina. Atuou nos projetos de pesquisa e extensão VISPUBLICA (2016-2018) e SIGELU (2018-2021) na UNIFEI. Atualmente pesquisa a aplicação de técnicas de Aprendizado de Máquina para análise de séries temporais dos dados do Brazil Data Cube.</div>
              </div>
            </div>

          </div>
          )
          break;
        case 2:
          return (
            <div className={styles.grid6}>

              <div className={styles.externo}>
                <div className={styles.interno}>
                    <div className={styles.participanteNome}>Bárbara Pimenta Caetano e Anna Luiza Pereira Rosa</div>
                    <div className={styles.participanteConteudo}>Bárbara é Bacharel em Sistemas de Informação (2015) e Mestre (2018) e Doutoranda em Engenharia de Sistemas e Computação pela Universidade Federal do Rio de Janeiro. Tem experiência no desenvolvimento de soluções web para business intelligence em diversos cenários. Participou de projetos de pesquisa e extensão na UFRJ e na UNIFEI junto com a professora Melise, como o VISPUBLICA e em parceria com a empresa Lemobs. Atualmente pesquisa como a tecnologia pode impactar na participação pública durante a execução de planos de desenvolvimento urbano em parceria com o NEIRU. Anna Luiza é Graduanda em Ciência da Computação pela Universidade Federal de Itajubá. Tem experiência no desenvolvimento de soluções web para governo eletrônico. Participa do projeto de pesquisa e extensão, coma professora Melise, em parceria com a empresa Lemobs. Atualmente está desenvolvendo o TFG, com a professora Isabela, na área de aprendizado de máquina com ênfase no estudo de redes neurais.</div>
                </div>
              </div>
              
              <div className={styles.externo}>
                <div className={styles.interno}>
                    <div className={styles.participanteNome}>Lina Garcés</div>
                    <div className={styles.participanteConteudo}>Professora credenciada no programa de pós-graduação em ciência e tecnologia da computação da UNIFEI. Doutora na área de Engenharia de Software, orientadora de projetos de IC e mestrado acadêmico. Sempre estudante! Apaixonada pela articulação da ciência, empreendedorismo, inovação, ensino e sociedade, a procura de ajudar a construir um mundo melhor para todos(as).</div>
                </div>
              </div>
  
              <div className={styles.externo}>
                <div className={styles.interno}>
                    <div className={styles.participanteNome}>Marcos Barbosa</div>
                    <div className={styles.participanteConteudo}>Entusiasta da programação, formou-se em técnico em informática pelo IFSULDEMINAS e atualmente cursa Engenharia da Computação na UNIFEI, participa de projetos de extensão deste 2018, com foco em desenvolvimento web e mobile. Ministrou minicursos de Git/GitHub e de Metodologia Ágeis enquanto membro da empresa júnior Asimov.</div>
                </div>
              </div>
  
              <div className={styles.externo}>
                <div className={styles.interno}>
                    <div className={styles.participanteNome}>Heron Yugo Inouye</div>
                    <div className={styles.participanteConteudo}>Analista full-stack na empresa Comprovei. Pós-Graduado em Ciência de Dados e Big Data pela PUC MG (2021), Pós-Graduado em Desenvolvimento Mobile, SOA e Cloud Computing pelo Inatel (Turma 2016), possui MBA em Gestão Empresarial pela UNIFEI (Turma 2011), Pós-Graduado em Engenharia Web pela UNIFEI (Turma 2010) e Bacharel em Ciência da Computação também pela UNIFEI (Turma 2003).</div>
                </div>
              </div>

              <div className={styles.externo}>
                <div className={styles.interno}>
                    <div className={styles.participanteNome}>Vanessa Cristina Oliveira de Souza</div>
                    <div className={styles.participanteConteudo}>Bacharel em Ciência da Computação (2004) pela UFLA, Mestre em Sensoriamento Remoto (2008) pelo INPE, Doutora em Computação Aplicada pelo INPE (2017). Professora na Universidade Federal de Itajubá desde 2010 onde ministra aulas de banco de dados e programação. Trabalha com geotecnologias desde a graduação, quando atuou no laboratório de geoprocessamento da EPAMIG Sul de Minas. Atualmente tem atuado em projetos de extensão envolvendo geotecnologias, como projetos de recadastramento imobiliário, segurança pública e agricultura.</div>
                </div>
              </div>
  
              <div className={styles.externo}>
                <div className={styles.interno}>
                    <div className={styles.participanteNome}>Ana Maísa do Nascimento Santos</div>
                    <div className={styles.participanteConteudo}>Tem 20 anos e é Técnica em Informática para Internet pelo Instituto Federal de São Paulo(Campus Guarulhos). Atualmente, está cursando o 4º Período de Ciência da Computação na Universidade Federal de Itajubá (UNIFEI) e foi por meio da UNIFEI que ingressou na byron.solutions, Empresa Júnior de T.I. da Universidade, onde é Gerente de Marketing. A byron.solutions é uma empresa júnior de T.I. associada à UNIFEI. Seus serviços incluem Aplicativos, E-commerces, Landing pages e Sistemas.</div>
                </div>
              </div>

            </div>
          )
          break;
        case 3:
          return (
            <div className={styles.grid6}>

              <div className={styles.externo}>
                <div className={styles.interno}>
                    <div className={styles.participanteNome}>Rafael Gomes Braga</div>
                    <div className={styles.participanteConteudo}>Engenheiro de Controle e Automação e mestre em Ciência da Computação pela UNIFEI eatualmente é aluno de doutorado na École de Technologie Supérieure em Montréal, no Canadá, atuando nas áreas deenxames robóticos, drones e inteligência artificial. Sua pesquisa envolve estratégias de navegação de robôs em enxames epercepção e mapeamento do ambiente.</div>
                </div>
              </div>
              
              <div className={styles.externo}>
                <div className={styles.interno}>
                    <div className={styles.participanteNome}>Bianca da Rocha Bartolomei</div>
                    <div className={styles.participanteConteudo}>Bacharel e mestranda em Ciência da Computação pela UNIFEI, trabalha em Data & Analytics na Zippi, fintech cujo objetivo é a concessão de crédito para trabalhadores autônomos.</div>
                </div>
              </div>
  
              <div className={styles.externo}>
                <div className={styles.interno}>
                    <div className={styles.participanteNome}>Lourenço Alves Pereira Júnior</div>
                    <div className={styles.participanteConteudo}>Doutor (2016) e Mestre (2010) em Ciências de Computação e Matemática Computacional pela Universidade de São Paulo, Bacharel em Ciência da Computação pela Universidade de Alfenas (2006). Atualmente Professor no Instituto Tecnológico de Aeronáutica - ITA nas áreas de Segurança Cibernética e Redes de Computadores.  Foco no estudo de sistemas operacionais e implementações de pilhas de protocolos de redes.  Atualmente realizando pesquisas em segurança cibernética em infraestruturas críticas que envolvem 5G/6G, Internet das Coisas, Sistemas de Transportes Inteligentes e malwares. Tópicos de interesse: detecção de tráfego malicioso por meio de assinaturas e anomalias para desenvolvimento de nova geração de sistemas de detecção e prevenção de intrusão; implementação de mecanismo de proteção (firewall) baseado em zero-trust; enumeração e exploração de firmware em grande escala; exploração de tecnologias de redes veiculares (WAVE e 5G); e orquestração de cadeia de comando e controle de malware.  Responsável pelo Laboratório de Comando & Controle e Defesa Cibernética do ITA.</div>
                </div>
              </div>
  
              <div className={styles.externo}>
                <div className={styles.interno}>
                    <div className={styles.participanteNome}>Edmilson Marmo Moreira</div>
                    <div className={styles.participanteConteudo}>Ainda não informado.</div>
                </div>
              </div>

              <div className={styles.externo}>
                <div className={styles.interno}>
                    <div className={styles.participanteNome}>Bruno Yuji Lino Kimura</div>
                    <div className={styles.participanteConteudo}>Possui formação em Ciência da Computação, com graduação pela PUC Minas (2005), mestrado pela UFSCar (2008) e doutorado pela USP (2012). Entre 2010 e 2015 foi professor do Instituto de Matemática e Computação (IMC) da UNIFEI. Atualmente, é professor associado do Instituto de Ciência e Tecnologia (ICT) da UNIFESP. Desenvolve atividades de ensino em Sistemas Computacionais nos cursos de graduação em Ciência e Tecnologia, Ciência da Computação e Engenharia de Computação da UNIFESP. Orienta alunos de mestrado e doutorado no Programa de Pós-Graduação em Ciência da Computação (PGG-CC) da UNIFESP. Desenvolve atividades de pesquisa em Redes de Computadores através de colaborações científicas nacionais e internacionais entre Universidade e Indústria, com foco em problemas de transmissão de dados para ambientes de IoT/Edge, Redes Móveis e Internet do Futuro.</div>
                </div>
              </div>
  
              <div className={styles.externo}>
                <div className={styles.interno}>
                    <div className={styles.participanteNome}> Alan Bendasoli Pavan e Hektor Sthenos Alves Monteiro</div>
                    <div className={styles.participanteConteudo}>
                      <p>Alan Pavan possui graduação em Física - Bacharelado pela Ufscar (2003), mestrado em Física pela USP (2006) e doutorado em Física pela USP (2010). Atualmente é professor associado da Universidade Federal de Itajubá. Tem experiência na área de Física, com ênfase em Relatividade e Gravitação. Atualmente tem se dedicado ao estudo de aprendizado de máquina e redes neurais e suas aplicações em Gravitação e áreas da saúde. É líder do Grupo de Pesquisa e Estudo em Machine Learning - GREMLING.</p>
                      <p>Hektor Monteiro possui graduação em Bacharelado Em Física pelo Instituto de Física (1997), mestrado em Astronomia pelo Instituto de Astronomia Geofísica e Ciências Atmosféricas (2001) e doutorado em Astronomia pelo Instituto de Astronomia Geofísica e Ciências Atmosféricas (2004). Atualmente é Professor Pesquisador da Universidade Federal de Itajubá onde desenvolve pesquisa na área de evolução estelar com ênfase computacional. É líder do Grupo de pesquisa em Astrofísica.</p>
                    </div>
                </div>
              </div>

            </div>
          )
          break;
        case 4:
          return (
            <div className={styles.grid6}>
              <div className={styles.externo}>
                <div className={styles.interno}>
                    <div className={styles.participanteNome}>Marcelo Penninck</div>
                    <div className={styles.participanteConteudo}>
                    Trabalha na Siemens como consultor de Pré Vendas, focado na plataforma Mendix, trabalhando a mais de 10 anos na área de desenvolvimento de sistemas e a 5 anos  com foco em low-code plataforma (Mendix).</div>
                </div>
              </div>

              <div className={styles.externo}>
                <div className={styles.interno}>
                    <div className={styles.participanteNome}>Equipe Black Bee Drones</div>
                    <div className={styles.participanteConteudo}>Projeto de extensão especializado no desenvolvimento de códigos que tornam as aeronaves remotamente pilotadas inteligentes. Os membros que atuam na área de software da equipe possuem conhecimentos a respeito de visão computacional e programação de drones para missões propostas em competições tecnológicas.</div>
                </div>
              </div>

              <div className={styles.externo}>
                <div className={styles.interno}>
                    <div className={styles.participanteNome}>Paulo Antonio Cerávolo Rodrigues</div>
                    <div className={styles.participanteConteudo}>Desenvolvedor de software no mercado desde 2005, atualmente é iOS Software Designer na Globant, empresa multinacional, trabalhando para os EUA. Trabalha como Tech Leader e arquiteto de software em grandes empresas do mercado como Westwing, Burger King, Avon / Natura, Riachuelo, Via Varejo (CasasBahia, PontoFrio e Extra).Especialista em desenvolvimento Mobile, atua com liderança, dev projeto e área comercial. Também é mentor e auxilia no desenvolvimento de talentos.</div>
                </div>
              </div>
            
              

            </div>
          )
          break;
        }
    }
  return (
    <div>
        {renderSlider()}
    </div>
  )
}

