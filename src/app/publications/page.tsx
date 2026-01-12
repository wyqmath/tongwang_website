"use client";

export default function PublicationsPage() {

  
    return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4" style={{ color: 'rgb(102, 8, 116)' }}>Publications</h1>
        <p className="text-lg text-gray-600 mt-2">
          <sup>#</sup> Co-first authors, <sup>*</sup> Corresponding authors
        </p>
      </div>

      {/* Publications List */}
      <div className="space-y-6">
        <div className="mb-8">
          <div className="space-y-4">
            {/* Publication 29 */}
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-lg leading-relaxed">
                  Zhou, Y., <u className="font-medium">Wang, T.*</u> (2025).{' '}
                  <a href="https://pubs.aip.org/aip/jcp/article/163/19/195105/3373068/Dynamic-insights-into-the-structural-evolution-of" className="hover:underline" style={{ color: 'rgb(147, 51, 234)' }}>Dynamic insights into the structural evolution of ACE2–RBD interactions through molecular dynamics simulation, Markov state modeling, and large language model mutation prediction</a>.{' '}
                  <i><b>J. Chem. Phys.</b></i>, 163(19).
                  {' '}<a href="https://pubs.aip.org/jcp/collection/595608/2025-JCP-Emerging-Investigators-Special-Collection" target="_blank" rel="noopener noreferrer" className="font-bold text-purple-600 hover:underline">(JCP 2025 JCP Emerging Investigators Special Collection)</a>
                </p>
              </div>
            </div>

            {/* Publication 28 */}
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-lg leading-relaxed">
                  Cui, T.<sup>#</sup>, Zhou, Y.<sup>#</sup>, <u className="font-medium">Wang, T.*</u> (2025).{' '}
                  <a href="https://www.sciencedirect.com/science/article/abs/pii/S0959440X2500209X" className="hover:underline" style={{ color: 'rgb(147, 51, 234)' }}>Recent advances in artificial intelligence–driven biomolecular dynamics simulations based on machine learning force fields</a>.{' '}
                  <i><b>Curr. Opin. Struct. Biol.</b></i>, 95, 103191.
                  {' '}<span className="font-bold text-purple-600">(Invited Review)</span>
                </p>
              </div>
            </div>


            {/* Publication 24 */}
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-lg leading-relaxed">
                  <u className="font-medium">Wang, T.<sup>#*</sup></u>, He, X.<sup>#</sup>, Li, M.<sup>#</sup>, Li, Y.<sup>#</sup>, Bi, R., Wang, Y., Cheng, C., Shen, X., Meng, J., Zhang, H., Liu, H., Wang, Z., Li, S., Shao, B.*, Liu, T. Y. (2024).{' '}
                  <a href="https://www.nature.com/articles/s41586-024-08127-z" className="hover:underline" style={{ color: 'rgb(147, 51, 234)' }}>Ab initio characterization of protein molecular dynamics with AI2BMD</a>.{' '}
                  <i><b>Nature</b></i>, 635: 1019–1027.
                  {' '}<a href="https://gpb.big.ac.cn/news/1022" target="_blank" rel="noopener noreferrer" className="font-bold text-purple-600 hover:underline">(Top 10 Advances in Bioinformatics)</a>
                </p>
              </div>
            </div>

            {/* Publication 23 */}
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-lg leading-relaxed">
                  Zhang, H.<sup>#</sup>, Liu, S.<sup>#</sup>, You, J., Liu, C.*, Zheng, S.*, Lu, Z., <u className="font-medium">Wang, T.</u>, Zheng, N., Shao, B.* (2024).{' '}
                  <a href="https://www.nature.com/articles/s43588-024-00605-8" className="hover:underline" style={{ color: 'rgb(147, 51, 234)' }}>Overcoming the barrier of orbital-free density functional theory for molecular systems using deep learning</a>.{' '}
                  <i><b>Nat. Comput. Sci.</b></i>, 4(3): 210–223.
                </p>
              </div>
            </div>

            {/* Publication 22 */}
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-lg leading-relaxed">
                  Wang, Y.<sup>#</sup>, <u className="font-medium">Wang, T.<sup>#*</sup></u>, Li, S.<sup>#</sup>, He, X., Li, M., Wang, Z., Zheng, N., Shao, B.*, Liu, T. Y. (2024).{' '}
                  <a href="https://www.nature.com/articles/s41467-023-43720-2" className="hover:underline" style={{ color: 'rgb(147, 51, 234)' }}>Enhancing geometric representations for molecules with equivariant vector-scalar interactive message passing</a>.{' '}
                  <i><b>Nat. Commun.</b></i>, 15(1): 313.
                  {' '}<span className="font-bold text-purple-600">(Editors&apos; Highlights: <a href="https://www.nature.com/collections/ceiajcdbeb" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">AI and machine learning</a>, <a href="https://www.nature.com/collections/idhhgedgig" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Biotechnology and methods</a>)</span>
                </p>
              </div>
            </div>

            {/* Publication 21 */}
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-lg leading-relaxed">
                  Li, Y.<sup>#</sup>, Wang, Y.<sup>#</sup>, Huang, L.*, Yang, H., Wei, X., Zhang, J.*, <u className="font-medium">Wang, T.*</u>, Wang, Z., Shao, B., Liu, T. Y. (2024).{' '}
                  <a href="https://openreview.net/forum?id=rvDQtdMnOl" className="hover:underline" style={{ color: 'rgb(147, 51, 234)' }}>Long-short-range message-passing: A physics-informed framework to capture non-local interaction for scalable molecular dynamics simulation</a>.{' '}
                  <i><b>Proceedings of the 12th International Conference on Learning Representations (ICLR)</b></i>.
                </p>
              </div>
            </div>

            {/* Publication 20 */}
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-lg leading-relaxed">
                  Yu, S.*, Wang, Z., Li, Q., <u className="font-medium">Wang, T.</u>, Zhao, W. (2024).{' '}
                  <a href="https://pubs.rsc.org/en/content/articlelanding/2024/fo/d3fo03277a" className="hover:underline" style={{ color: 'rgb(147, 51, 234)' }}>Innovative application of a novel di-d-fructofuranose 1,2&apos;:2,3&apos;-dianhydride hydrolase (DFA-IIIase) from Duffyella gerundensis A4 to burdock root to improve nutrition</a>.{' '}
                  <i><b>Food Funct.</b></i>, 15(2): 1021–1030.
                </p>
              </div>
            </div>

            {/* Publication 19 */}
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-lg leading-relaxed">
                  <u className="font-medium">Wang, Z.*</u>, Liu, G., Zhou, Y., Wang, T., Shao, B.* (2023).{' '}
                  <a href="https://openreview.net/forum?id=bPJmu1PbZD" className="hover:underline" style={{ color: 'rgb(147, 51, 234)' }}>Efficiently incorporating quintuple interactions into geometric deep learning force fields</a>.{' '}
                  <i><b>Proceedings of the 37th Conference on Neural Information Processing Systems (NeurIPS)</b></i>, 36: 77043–77055.
                </p>
              </div>
            </div>

            {/* Publication 18 */}
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-lg leading-relaxed">
                  Wang, Y.<sup>#</sup>, Li, S.<sup>#</sup>, <u className="font-medium">Wang, T.*</u>, Shao, B., Zheng, N., Liu, T. Y. (2023).{' '}
                  <a href="https://openreview.net/forum?id=9o6KQrklrE&noteId=Eeq0xGNxLw" className="hover:underline" style={{ color: 'rgb(147, 51, 234)' }}>Geometric transformer with interatomic positional encoding</a>.{' '}
                  <i><b>Proceedings of the 37th Conference on Neural Information Processing Systems (NeurIPS)</b></i>, 36: 55981–55994.
                </p>
              </div>
            </div>

            {/* Publication 17 */}
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-lg leading-relaxed">
                  <u className="font-medium">Wang, T.<sup>#*</sup></u>, He, X.<sup>#</sup>, Li, M.<sup>#</sup>, Shao, B.*, Liu, T. Y. (2023).{' '}
                  <a href="https://www.nature.com/articles/s41597-023-02465-9" className="hover:underline" style={{ color: 'rgb(147, 51, 234)' }}>AIMD-Chig: Exploring the conformational space of a 166-atom protein Chignolin with ab initio molecular dynamics</a>.{' '}
                  <i><b>Sci. Data</b></i>, 10(1): 549.
                </p>
              </div>
            </div>

            {/* Publication 16 */}
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-lg leading-relaxed">
                  <u className="font-medium">Wang, Z.*</u>, <u className="font-medium">Wu, H.*</u>, Sun, L., He, X., Liu, Z., Shao, B., Wang, T., Liu, T. Y. (2023).{' '}
                  <a href="https://pubs.aip.org/aip/jcp/article-abstract/159/3/035101/2902663/Improving-machine-learning-force-fields-for" className="hover:underline" style={{ color: 'rgb(147, 51, 234)' }}>Improving machine learning force fields for molecular dynamics simulations with fine-grained force metrics</a>.{' '}
                  <i><b>J. Chem. Phys.</b></i>, 159(3): 034102.
                  {' '}(<a href="https://pubs.aip.org/jcp/collection/1137/2023-JCP-Emerging-Investigators-Special-Collection" target="_blank" rel="noopener noreferrer" className="font-bold text-purple-600 hover:underline">2023 JCP Emerging Investigators Special Collection</a>, <a href="https://pubs.aip.org/aip/jcp/issue/159/3" target="_blank" rel="noopener noreferrer" className="font-bold text-purple-600 hover:underline">Cover</a>)
                </p>
              </div>
            </div>

            {/* Publication 15 */}
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-lg leading-relaxed">
                  Li, Z.<sup>#</sup>, Zhu, S.<sup>#</sup>, Shao, B.*, Zeng, X.*, <u className="font-medium">Wang, T.*</u>, Liu, T. Y. (2023).{' '}
                  <a href="https://academic.oup.com/bib/article/24/1/bbac597/6967036" className="hover:underline" style={{ color: 'rgb(147, 51, 234)' }}>DSN-DDI: an accurate and generalized framework for drug–drug interaction prediction by dual-view representation learning</a>.{' '}
                  <i><b>Brief. Bioinform.</b></i>, 24(1): bbac597.
                  {' '}<span className="font-bold text-purple-600">(ESI highly cited paper)</span>
                </p>
              </div>
            </div>

            {/* Publication 14 */}
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-lg leading-relaxed">
                  Gong, S.<sup>#</sup>, He, X.<sup>#</sup>, Meng, Q., Ma, Z., Shao, B.*, <u className="font-medium">Wang, T.*</u>, Liu, T. Y. (2022).{' '}
                  <a href="https://pubs.acs.org/doi/10.1021/acs.jpcb.2c03711" className="hover:underline" style={{ color: 'rgb(147, 51, 234)' }}>Stochastic lag time parameterization for Markov state models of protein dynamics</a>.{' '}
                  <i><b>J. Phys. Chem. B</b></i>, 126(46): 9465–9475.
                  {' '}<a href="https://pubs.acs.org/toc/jpcbfk/126/46?ref=breadcrumb" target="_blank" rel="noopener noreferrer" className="font-bold text-purple-600 hover:underline">(Cover Article)</a>
                </p>
              </div>
            </div>

            {/* Publication 13 */}
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-lg leading-relaxed">
                  Wang, Y., Li, S., Wang, Z., He, X., Shao, B., Liu, T. Y., <u className="font-medium">Wang, T.*</u> (2022).{' '}
                  <a href="https://arxiv.org/abs/2211.12791" className="hover:underline" style={{ color: 'rgb(147, 51, 234)' }}>An ensemble of VisNet, Transformer-M, and pretraining models for molecular property prediction in OGB Large-Scale Challenge@ NeurIPS 2022</a>.{' '}
                  <i><b>arXiv preprint</b></i> arXiv:2211.12791.
                  {' '}<a href="https://ogb.stanford.edu/neurips2022/results/#winners_pcqm4mv2" target="_blank" rel="noopener noreferrer" className="font-bold text-purple-600 hover:underline">(2nd place in OGB-LSC@NeurIPS 2022)</a>
                </p>
              </div>
            </div>

            {/* Publication 13b */}
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-lg leading-relaxed">
                  Liu, S.<sup>#</sup>, Wang, Y.<sup>#</sup>, Deng, Y., He, L., Shao, B., Yin, J., Zheng, N., Liu, T. Y., <u className="font-medium">Wang, T.*</u> (2022).{' '}
                  <a href="https://academic.oup.com/bib/article/23/5/bbac162/6591682" className="hover:underline" style={{ color: 'rgb(147, 51, 234)' }}>Improved drug–target interaction prediction with intermolecular graph transformer</a>.{' '}
                  <i><b>Brief. Bioinform.</b></i>, 23(5): bbac162.
                </p>
              </div>
            </div>

            {/* Publication 12 */}
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-lg leading-relaxed">
                  Zhang, S.<sup>#</sup>, Liang, Q.<sup>#</sup>, He, X., Zhao, C., Ren, W., Yang, Z., Wang, Z., Ding, Q., Deng, H., <u className="font-medium">Wang, T.*</u>, Zhang, L.*, Wang, X.* (2022).{' '}
                  <a href="https://www.nature.com/articles/s41422-021-00600-y" className="hover:underline" style={{ color: 'rgb(147, 51, 234)' }}>Loss of Spike N370 glycosylation as an important evolutionary event for the enhanced infectivity of SARS-CoV-2</a>.{' '}
                  <i><b>Cell Res.</b></i>, 32(3): 315–318.
                </p>
              </div>
            </div>

            {/* Publication 11 */}
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-lg leading-relaxed">
                  Lan, J.<sup>#</sup>, He, X.<sup>#</sup>, Ren, Y.<sup>#</sup>, Wang, Z.<sup>#</sup>, Zhou, H., Fan, S., Zhu, C., Liu, D., Shao, B., Liu, T. Y., Wang, Q., Zhang, L.*, Ge, J.*, <u className="font-medium">Wang, T.*</u>, Wang, X.* (2022).{' '}
                  <a href="https://www.nature.com/articles/s41422-022-00644-8" className="hover:underline" style={{ color: 'rgb(147, 51, 234)' }}>Structural insights into the SARS-CoV-2 Omicron RBD–ACE2 interaction</a>.{' '}
                  <i><b>Cell Res.</b></i>, 32(6): 593–595.
                </p>
              </div>
            </div>

            {/* Publication 10 */}
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-lg leading-relaxed">
                  Ding, W.<sup>#</sup>, Xu, Q.<sup>#</sup>, Liu, S., <u className="font-medium">Wang, T.*</u>, Shao, B., Gong, H., Liu, T. Y. (2021).{' '}
                  <a href="https://academic.oup.com/bioinformatics/article/37/22/4075/6295877" className="hover:underline" style={{ color: 'rgb(147, 51, 234)' }}>SAMF: a self-adaptive protein modeling framework</a>.{' '}
                  <i><b>Bioinformatics</b></i>, 37(22): 4075–4082.
                </p>
              </div>
            </div>

            {/* Publication 9 */}
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-lg leading-relaxed">
                  Li, Y.<sup>#</sup>, <u className="font-medium">Wang, T.<sup>#*</sup></u>, Zhang, J.<sup>#</sup>, Shao, B., Gong, H.*, Wang, Y., He, X., Liu, S., Liu, T. Y. (2021).{' '}
                  <a href="https://onlinelibrary.wiley.com/doi/10.1002/adts.202100152" className="hover:underline" style={{ color: 'rgb(147, 51, 234)' }}>Exploring the regulatory function of the N-terminal domain of SARS-CoV-2 Spike protein through molecular dynamics simulation</a>.{' '}
                  <i><b>Adv. Theory Simul.</b></i>, 4(10): 2100152.
                  {' '}(<a href="/Top_Download_Exploring.jpg" target="_blank" rel="noopener noreferrer" className="font-bold text-purple-600 hover:underline">Top Downloaded Article Award</a><span className="font-bold text-purple-600">, </span><a href="https://advanced.onlinelibrary.wiley.com/toc/25130390/2021/4/10" target="_blank" rel="noopener noreferrer" className="font-bold text-purple-600 hover:underline">Cover</a>)
                </p>
              </div>
            </div>

            {/* Publication 8 */}
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-lg leading-relaxed">
                  Liu, S., <u className="font-medium">Wang, T.*</u>, Xu, Q., Shao, B., Yin, J., Liu, T. Y. (2021).{' '}
                  <a href="https://link.springer.com/article/10.1186/s12859-021-04258-6" className="hover:underline" style={{ color: 'rgb(147, 51, 234)' }}>Complementing sequence-derived features with structural information extracted from fragment libraries for protein structure prediction</a>.{' '}
                  <i><b>BMC Bioinformatics</b></i>, 22(1): 351.
                </p>
              </div>
            </div>

            {/* Publication 7 */}
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-lg leading-relaxed">
                  <u className="font-medium">Wang, T.</u>, Qiao, Y., Ding, W., Mao, W., Zhou, Y.*, Gong, H.* (2019).{' '}
                  <a href="https://www.nature.com/articles/s42256-019-0075-7" className="hover:underline" style={{ color: 'rgb(147, 51, 234)' }}>Improved fragment sampling for ab initio protein structure prediction using deep neural networks</a>.{' '}
                  <i><b>Nat. Mach. Intell.</b></i>, 1(8): 347–355.
                  {' '}<span className="font-bold text-purple-600">(Editors&apos; Highlights: <a href="https://www.nature.com/articles/s42256-019-0086-4" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Protein structure prediction beyond AlphaFold</a>)</span>
                </p>
              </div>
            </div>

            {/* Publication 7b */}
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-lg leading-relaxed">
                  <u className="font-medium">Wang, T.</u>, Gong, H.*, Shakhnovich, E. I.* (2019).{' '}
                  <a href="https://arxiv.org/abs/1906.05785" className="hover:underline" style={{ color: 'rgb(147, 51, 234)' }}>Improved fragment-based movement with LRFragLib for all-atom Ab initio protein folding</a>.{' '}
                  <i><b>arXiv preprint</b></i> arXiv:1906.05785.
                </p>
              </div>
            </div>

            {/* Publication 6 */}
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-lg leading-relaxed">
                  Mao, W., <u className="font-medium">Wang, T.</u>, Zhang, W., Gong, H.* (2018).{' '}
                  <a href="https://link.springer.com/article/10.1186/s12859-018-2150-1" className="hover:underline" style={{ color: 'rgb(147, 51, 234)' }}>Identification of residue pairing in interacting β-strands from a predicted residue contact map</a>.{' '}
                  <i><b>BMC Bioinformatics</b></i>, 19(1): 146.
                </p>
              </div>
            </div>

            {/* Publication 5 */}
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-lg leading-relaxed">
                  <u className="font-medium">Wang, T.</u>, Yang, Y., Zhou, Y., Gong, H.* (2017).{' '}
                  <a href="https://academic.oup.com/bioinformatics/article/33/5/677/2608640" className="hover:underline" style={{ color: 'rgb(147, 51, 234)' }}>LRFragLib: an effective algorithm to identify fragments for de novo protein structure prediction</a>.{' '}
                  <i><b>Bioinformatics</b></i>, 33(5): 677–684.
                </p>
              </div>
            </div>

            {/* Publication 1 */}
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-lg leading-relaxed">
                  <u className="font-medium">Wang, T.</u>, Sui, L., Kang, C.* (2013).{' '}
                  <a href="http://doi.org/10.13865/j.cnki.cjbmb.2013.12.010" className="hover:underline" style={{ color: 'rgb(147, 51, 234)' }}>Syntenin as a multifunctional cellular adaptor protein</a>.{' '}
                  <i><b>Chin. J. Biochem. Mol. Biol.</b></i>, 12: 6–14.
                </p>
              </div>
            </div>

            {/* Publication 1b */}
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-lg leading-relaxed">
                  Jiang, H. S., Sun, C., <u className="font-medium">Wang, T.</u>, Zhao, X. F., Wang, J. X.* (2013).{' '}
                  <a href="https://www.sciencedirect.com/science/article/abs/pii/S1050464813005378" className="hover:underline" style={{ color: 'rgb(147, 51, 234)' }}>A single whey acidic protein domain containing protein (SWD) inhibits bacteria invasion and dissemination in shrimp Marsupenaeus japonicus</a>.{' '}
                  <i><b>Fish Shellfish Immunol.</b></i>, 35(2): 310–318.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
