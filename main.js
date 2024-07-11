import chuvaDeMeteoros from './data/colecaoDados.js';
import { retornaChuvasHoje, retornaChuvasProximas } from './functions/funcaoLogicas.js'



chuvaDeMeteoros.filter(retornaChuvasHoje);

chuvaDeMeteoros.filter(retornaChuvasProximas);
