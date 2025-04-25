import React, { useState } from 'react';

import axios from '../../services/axios';

import BoxIntroduction from '../../components/introduction';
import Loading from '../../components/loading';

import { DivGerarRelatorio } from './styled';
import { PageBackground, DivMain, SectionMain } from '../../styles/GlobalStyles';

import iconReport from './assets/images/icon-beneficiario.png';
export default function Report() {
  const [searchTerm, setSearchTerm] = useState('');
  const [relatorio, setRelatorio] = useState('');
  const [isLoading, setIsloading] = useState(false);

  const gerarRelatorio = async () => {
    try {
      setIsloading(true);
      const response = await axios.get('/relatorio');
      setRelatorio(response.data.resposta);
      setIsloading(false);
    } catch (error) {
      setIsloading(false);
      console.log(error);
    }
  };

  return (
    <>
      <Loading isLoading={isLoading} />
      <PageBackground>
        <DivMain>
          <SectionMain>
            <BoxIntroduction
              icon={iconReport}
              alt="Icone de relatórios"
              title="Relatórios"
              text="Análise de dados e relatórios"
              hideButtonAdd={true}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              hideSearchBarAndFilter={true}
            />
            <div>
              <DivGerarRelatorio>
                <button onClick={gerarRelatorio}>Gerar relatório beneficiários</button>
                <div>
                  <div dangerouslySetInnerHTML={{ __html: relatorio }} />
                </div>
              </DivGerarRelatorio>
            </div>
          </SectionMain>
        </DivMain>
      </PageBackground>
    </>
  );
}
