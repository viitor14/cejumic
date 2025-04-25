import { React, useState, useEffect } from 'react';

import axios from '../../services/axios';
import Loading from '../../components/loading';
import BoxIntroduction from '../../components/introduction';
import BoxContent from '../../components/boxContent';
import { PageBackground, DivMain, SectionMain } from '../../styles/GlobalStyles';

export default function PageDashboard() {
  const [totalBeneficiario, setTotalBeneficiario] = useState(0);
  const [totalVoluntario, setTotalVoluntario] = useState(0);
  const [totalDoacao, setTotalDoacao] = useState(0);
  const [porcentagemBeneficiario, setPorcentagemBeneficiario] = useState([]);
  const [porcentagemVoluntario, setPorcentagemVoluntario] = useState([]);
  const [porcentagemDoacao, setPorcentagemDoacao] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  //useEffect para calcular total de beneficiario e porcentagem por mês
  useEffect(() => {
    async function getBeneficiario() {
      const response = await axios.get('/beneficiario/ativo');

      const beneficiarios = response.data;

      const total = beneficiarios.length;

      setTotalBeneficiario(beneficiarios.length);

      // Agrupar por mês/ano
      const contagemPorMes = beneficiarios.reduce((acc, item) => {
        const data = new Date(item.created_at);
        const mesAno = `${data.getMonth() + 1}/${data.getFullYear()}`; // Ex: "4/2025"

        if (!acc[mesAno]) {
          acc[mesAno] = 1;
        } else {
          acc[mesAno]++;
        }

        return acc;
      }, {});

      // Calcular porcentagens
      const porcentagemPorMes = Object.entries(contagemPorMes).map(([mesAno, count]) => {
        return {
          mes: mesAno,
          quantidade: count,
          porcentagem: ((count / total) * 100).toFixed(0)
        };
      });

      setPorcentagemBeneficiario(porcentagemPorMes);
    }

    getBeneficiario();
  }, []);

  useEffect(() => {
    async function getVoluntario() {
      const response = await axios.get('/voluntario');
      const voluntarios = response.data;

      const total = voluntarios.length;
      setTotalVoluntario(total);

      const contagemPorMes = voluntarios.reduce((acc, item) => {
        const data = new Date(item.created_at);
        const mesAno = `${data.getMonth() + 1}/${data.getFullYear()}`;

        if (!acc[mesAno]) {
          acc[mesAno] = 1;
        } else {
          acc[mesAno]++;
        }

        return acc;
      }, {});

      const porcentagemPorMes = Object.entries(contagemPorMes).map(([mesAno, count]) => {
        return {
          mes: mesAno,
          quantidade: count,
          porcentagem: ((count / total) * 100).toFixed(0)
        };
      });

      setPorcentagemVoluntario(porcentagemPorMes);
    }

    getVoluntario();
  }, []);

  useEffect(() => {
    async function getDoacao() {
      setIsloading(true);
      const response = await axios.get('/doacao');
      const doacoes = response.data;
      setIsloading(false);
      // Total geral
      const total = doacoes.reduce((acc, item) => acc + (item.valor || 0), 0);
      setTotalDoacao(total);

      // Agrupar valor por mês/ano
      const valoresPorMes = doacoes.reduce((acc, item) => {
        const data = new Date(item.created_at);
        const mesAno = `${data.getFullYear()}-${(data.getMonth() + 1).toString().padStart(2, '0')}`; // Ex: 2025-04

        if (!acc[mesAno]) {
          acc[mesAno] = item.valor || 0;
        } else {
          acc[mesAno] += item.valor || 0;
        }

        return acc;
      }, {});

      // Ordenar os meses
      const mesesOrdenados = Object.keys(valoresPorMes).sort();

      // Calcular variação percentual entre meses
      const porcentagens = mesesOrdenados.map((mes, index) => {
        const valorAtual = valoresPorMes[mes];
        const valorAnterior = valoresPorMes[mesesOrdenados[index - 1]] || 0;

        let variacao = 0;

        if (index > 0 && valorAnterior > 0) {
          variacao = ((valorAtual - valorAnterior) / valorAnterior) * 100;
        }

        return {
          mes,
          valor: valorAtual,
          variacao: variacao.toFixed(0) // pode ser negativo ou positivo
        };
      });

      setPorcentagemDoacao(porcentagens);
    }

    getDoacao();
  }, []);

  return (
    <>
      <Loading isLoading={isLoading} />
      <PageBackground>
        <DivMain>
          <SectionMain>
            <BoxIntroduction
              icon="../../assets/images/Icon-with-border.png"
              title="Dashboad"
              text="Visão geral das atividades da CEJUMIC"
              hideSearchBarAndFilter={true}
              hideButtonAdd={true}
            />

            <BoxContent
              title="Beneficiários"
              value={totalBeneficiario}
              percentage={
                porcentagemBeneficiario.length > 0
                  ? `${porcentagemBeneficiario.at(-1).porcentagem}%`
                  : '0%'
              }
              icon="../../assets/images/icon-beneficiario.png"
            />

            <BoxContent
              title="Voluntários"
              value={totalVoluntario}
              percentage={
                porcentagemVoluntario.length > 0
                  ? `${porcentagemVoluntario.at(-1).porcentagem}%`
                  : '0%'
              }
              icon="../../assets/images/icon-voluntarios.png"
            />

            <BoxContent
              title="Doações (Mês)"
              value={`R$${totalDoacao}`}
              percentage={
                porcentagemDoacao.length > 0 ? `${porcentagemDoacao.at(-1).variacao}%` : '0%'
              }
              icon="../../assets/images/icon-doacao.png"
              textColor={
                porcentagemDoacao.length > 0 && porcentagemDoacao.at(-1).variacao < 0
                  ? '#ff0000' // vermelho
                  : '#00c853' // verde
              }
            />
            {/*
              <BoxContent
              title="Projetos Ativos"
              value="8"
              percentage="+25%"
              icon="../../assets/images/icon-projetos.png"
              />
              */}
          </SectionMain>
        </DivMain>
      </PageBackground>
    </>
  );
}
