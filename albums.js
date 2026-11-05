/* ===== CONFIGURAÇÃO CENTRAL DO NORACTION =====
   Edite apenas este arquivo para trocar frase, contatos e álbuns. */
const SITE = {
  frase: "Eternizando momentos!",
  fraseDestaque: "Cada clique, uma história.", // frase grande entre as seções (vazio = não mostra)
  mensagemWhats: "Olá! Vi seu portfólio da NORACTION e gostaria de um orçamento.",
  contato: { whatsapp: "5575981071488", email: "hericknoronha14@gmail.com", instagram: "noraction_" }
  // whatsapp: só números com DDI | instagram: usuário sem @
};

/* Para cada álbum: id (único, minúsculo, sem espaços), titulo, data (AAAA-MM-DD),
   cor (cor de destaque do álbum), capa, fotos e descricao (opcional). Os álbuns aparecem do mais recente ao mais antigo. */
const ALBUNS = [
  {
    id: "futebol",
    cor: "#35d07f",
    titulo: "FUTEBOL",
    data: "",
    capa: "fotos/futebol/ftb1.jpg",
    fotos: ["fotos/futebol/ftb1.jpg", "fotos/futebol/ftb2.jpg", "fotos/futebol/ftb3.jpg", "fotos/futebol/ftb4.jpg", "fotos/futebol/ftb5.jpg", "fotos/futebol/ftb6.jpg", "fotos/futebol/ftb7.jpg", "fotos/futebol/ftb8.jpg", "fotos/futebol/ftb9.jpg", "fotos/futebol/ftb10.jpg", "fotos/futebol/ftb11.jpg", "fotos/futebol/ftb12.jpg", "fotos/futebol/ftb13.jpg", "fotos/futebol/ftb14.jpg", "fotos/futebol/ftb15.jpg"]
  },
  {
    id: "futevolei",
    cor: "#ffc933",
    titulo: "FUTEVÔLEI",
    data: "",
    capa: "fotos/futevolei/ftv13.jpg",
    fotos: ["fotos/futevolei/ftv1.jpg", "fotos/futevolei/ftv2.jpg", "fotos/futevolei/ftv3.jpg", "fotos/futevolei/ftv4.jpg", "fotos/futevolei/ftv5.jpg", "fotos/futevolei/ftv6.jpg", "fotos/futevolei/ftv7.jpg", "fotos/futevolei/ftv8.jpg", "fotos/futevolei/ftv9.jpg", "fotos/futevolei/ftv10.jpg", "fotos/futevolei/ftv11.jpg", "fotos/futevolei/ftv12.jpg", "fotos/futevolei/ftv13.jpg", "fotos/futevolei/ftv14.jpg", "fotos/futevolei/ftv15.jpg"]
  },
  {
    id: "ensaios",
    cor: "#e66a8f",
    titulo: "ENSAIOS",
    data: "",
    capa: "fotos/ensaio/ens1.jpg",
    fotos: ["fotos/ensaio/ens1.jpg", "fotos/ensaio/ens2.jpg", "fotos/ensaio/ens3.jpg", "fotos/ensaio/ens4.jpg", "fotos/ensaio/ens5.jpg","fotos/ensaio/ens6.jpg"]
  },

  {
    id: "shows",
    cor: "#b05cff",
    titulo: "SHOWS",
    data: "",
    capa: "fotos/shows/show3.jpg",
    fotos: ["fotos/shows/show3.jpg","fotos/shows/show4.jpg","fotos/shows/show1.jpg","fotos/shows/show2.jpg","fotos/shows/show5.jpg","fotos/shows/show6.jpg","fotos/shows/show7.jpg","fotos/shows/show8.jpg","fotos/shows/show9.jpg","fotos/shows/show10.jpg","fotos/shows/show11.jpg","fotos/shows/show12.jpg","fotos/shows/show13.jpg","fotos/shows/show14.jpg","fotos/shows/show15.jpg"]
  },
  {
    id: "corrida",
    cor: "#ff7a1a",
    titulo: "CORRIDA",
    data: "",
    capa: "fotos/corrida/run1.jpg",
    fotos: ["fotos/corrida/run1.jpg","fotos/corrida/run2.jpg","fotos/corrida/run3.jpg","fotos/corrida/run4.jpg","fotos/corrida/run5.jpg","fotos/corrida/run6.jpg","fotos/corrida/run7.jpg","fotos/corrida/run8.jpg","fotos/corrida/run9.jpg","fotos/corrida/run10.jpg","fotos/corrida/run11.jpg","fotos/corrida/run12.jpg","fotos/corrida/run13.jpg","fotos/corrida/run14.jpg","fotos/corrida/run15.jpg"] 
  },
  {
    id: "volei",
    cor: "#3aa7ff",
    titulo: "VÔLEI",
    data: "",
    capa: "fotos/volei/vol1.jpg",
    fotos: ["fotos/volei/vol1.jpg","fotos/volei/vol2.jpg","fotos/volei/vol3.jpg","fotos/volei/vol4.jpg","fotos/volei/vol5.jpg","fotos/volei/vol6.jpg","fotos/volei/vol7.jpg","fotos/volei/vol8.jpg","fotos/volei/vol9.jpg","fotos/volei/vol10.jpg","fotos/volei/vol11.jpg","fotos/volei/vol12.jpg","fotos/volei/vol13.jpg","fotos/volei/vol14.jpg","fotos/volei/vol15.jpg"] 
  },
  {
    id: "sua-foto-no-jogo",
    cor: "#ff3b3b",
    titulo: "SUA FOTO NO JOGO",
    data: "",
    capa: "fotos/sfnj/sfnj1.jpg",
    fotos: ["fotos/sfnj/sfnj1.jpg","fotos/sfnj/sfnj2.jpg","fotos/sfnj/sfnj3.jpg","fotos/sfnj/sfnj4.jpg","fotos/sfnj/sfnj5.jpg","fotos/sfnj/sfnj6.jpg","fotos/sfnj/sfnj7.jpg","fotos/sfnj/sfnj8.jpg","fotos/sfnj/sfnj9.jpg","fotos/sfnj/sfnj10.jpg","fotos/sfnj/sfnj11.jpg","fotos/sfnj/sfnj12.jpg","fotos/sfnj/sfnj13.jpg","fotos/sfnj/sfnj14.jpg","fotos/sfnj/sfnj15.jpg"]
  },
  {
    id: "ciclismo",
    cor: "#2fd6d0",
    titulo: "CICLISMO",
    data: "",
    capa: "fotos/ciclismo/cic1.jpg",
    fotos: ["fotos/ciclismo/cic1.jpg","fotos/ciclismo/cic2.jpg","fotos/ciclismo/cic3.jpg","fotos/ciclismo/cic4.jpg","fotos/ciclismo/cic5.jpg","fotos/ciclismo/cic6.jpg","fotos/ciclismo/cic7.jpg","fotos/ciclismo/cic8.jpg","fotos/ciclismo/cic9.jpg","fotos/ciclismo/cic10.jpg","fotos/ciclismo/cic11.jpg","fotos/ciclismo/cic12.jpg","fotos/ciclismo/cic13.jpg","fotos/ciclismo/cic14.jpg","fotos/ciclismo/cic15.jpg"] 
  },

];
