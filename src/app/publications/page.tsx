"use client";

export default function PublicationsPage() {

  
    return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Publications</h1>
        <p className="text-xl text-muted-foreground">
          Research contributions and scholarly publications from our group
        </p>
      </div>

      

      {/* Publications List */}
      <div className="space-y-6">
        {/* 2025 Publications */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center" style={{ color: 'rgb(102, 8, 116)' }}>
            2025 Publications:
            <span className="ml-2 text-2xl">›</span>
          </h2>

          <div className="space-y-4">
            {/* Publication 29 */}
            <div className="flex gap-4">
              <div className="font-bold text-lg min-w-[3rem]">29.</div>
              <div className="flex-1">
                <p className="text-base leading-relaxed">
                  Zhou, Y., <u className="font-medium">Wang, T.*</u> (2025).
                  "<a href="https://pubs.aip.org/aip/jcp/article/163/19/195105/3373068/Dynamic-insights-into-the-structural-evolution-of" className="text-blue-600 hover:text-blue-800 hover:underline">Dynamic insights into the structural evolution of ACE2–RBD interactions through molecular dynamics simulation, Markov state modeling, and large language model mutation prediction</a>".
                  <i><b>J. Chem. Phys.</b></i>, 163(19).
                </p>
              </div>
            </div>

            {/* Publication 28 */}
            <div className="flex gap-4">
              <div className="font-bold text-lg min-w-[3rem]">28.</div>
              <div className="flex-1">
                <p className="text-base leading-relaxed">
                  Cui, T., Zhou, Y., <u className="font-medium">Wang, T.*</u> (2025).
                  "<a href="https://www.sciencedirect.com/science/article/abs/pii/S0959440X2500209X" className="text-blue-600 hover:text-blue-800 hover:underline">Recent advances in artificial intelligence–driven biomolecular dynamics simulations based on machine learning force fields</a>".
                  <i><b>Curr. Opin. Struct. Biol.</b></i>, 95, 103191.
                  <span className="font-bold text-purple-600">(Invited Review)</span>
                </p>
              </div>
            </div>

            
          </div>
        </div>

        {/* 2024 Publications */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">2024</h2>

          <div className="space-y-4">
            {/* Publication 24 */}
            <div className="flex gap-4">
              <div className="font-bold text-lg min-w-[3rem]">24.</div>
              <div className="flex-1">
                <p className="text-base leading-relaxed">
                  <u className="font-medium">Wang, T.*</u>, He, X., Li, M., Li, Y., Bi, R., Wang, Y., Cheng, C., Shen, X., Meng, J., Zhang, H., Liu, H., Wang, Z., Li, S., Shao, B., Liu, T. Y. (2024).
                  "<a href="https://www.nature.com/articles/s41586-024-08127-z" className="text-blue-600 hover:text-blue-800 hover:underline">Ab initio characterization of protein molecular dynamics with AI2BMD</a>".
                  <i><b>Nature</b></i>, 635: 1019–1027.
                </p>
              </div>
            </div>

            {/* Publication 23 */}
            <div className="flex gap-4">
              <div className="font-bold text-lg min-w-[3rem]">23.</div>
              <div className="flex-1">
                <p className="text-base leading-relaxed">
                  Zhang, H., Liu, S., You, J., Liu, C., Zheng, S., Lu, Z., <u className="font-medium">Wang, T.</u>, Zheng, N., Shao, B.* (2024).
                  "<a href="https://www.nature.com/articles/s43588-024-00605-8" className="text-blue-600 hover:text-blue-800 hover:underline">Overcoming the barrier of orbital-free density functional theory for molecular systems using deep learning</a>".
                  <i><b>Nat. Comput. Sci.</b></i>, 4(3): 210–223.
                </p>
              </div>
            </div>

            {/* Publication 22 */}
            <div className="flex gap-4">
              <div className="font-bold text-lg min-w-[3rem]">22.</div>
              <div className="flex-1">
                <p className="text-base leading-relaxed">
                  Wang, Y.<sup>#</sup>, <u className="font-medium">Wang, T.<sup>#</sup></u>, Li, S., He, X., Li, M., Wang, Z., Zheng, N., Shao, B.*, Liu, T. Y.* (2024).
                  "<a href="https://www.nature.com/articles/s41467-023-43720-2" className="text-blue-600 hover:text-blue-800 hover:underline">Enhancing geometric representations for molecules with equivariant vector-scalar interactive message passing</a>".
                  <i><b>Nat. Commun.</b></i>, 15(1): 313.
                  <span className="font-bold text-purple-600">(<a href="#" className="text-purple-600 hover:text-purple-800 hover:underline">Editors&apos; Highlights</a>)</span>
                </p>
              </div>
            </div>

            {/* Publication 21 */}
            <div className="flex gap-4">
              <div className="font-bold text-lg min-w-[3rem]">21.</div>
              <div className="flex-1">
                <p className="text-base leading-relaxed">
                  Li, Y., Wang, Y., Huang, L., Yang, H., Wei, X., Zhang, J., <u className="font-medium">Wang, T.</u>, Wang, Z., Shao, B.*, Liu, T. Y.* (2024).
                  "<a href="https://openreview.net/forum?id=FKfDxREDl1" className="text-blue-600 hover:text-blue-800 hover:underline">Long-short-range message-passing: A physics-informed framework to capture non-local interaction for scalable molecular dynamics simulation</a>".
                  <i><b>Proceedings of the 12th International Conference on Learning Representations (ICLR)</b></i>.
                </p>
              </div>
            </div>

            {/* Publication 20 */}
            <div className="flex gap-4">
              <div className="font-bold text-lg min-w-[3rem]">20.</div>
              <div className="flex-1">
                <p className="text-base leading-relaxed">
                  Yu, S., Wang, Z., Li, Q., <u className="font-medium">Wang, T.</u>, Zhao, W.* (2024).
                  "<a href="https://pubs.rsc.org/en/content/articlelanding/2024/fo/d3fo04341e" className="text-blue-600 hover:text-blue-800 hover:underline">Innovative application of a novel di-d-fructofuranose 1,2&apos;:2,3&apos;-dianhydride hydrolase (DFA-IIIase) from Duffyella gerundensis A4 to burdock root to improve nutrition</a>".
                  <i><b>Food Funct.</b></i>, 15(2): 1021–1030.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2023 Publications */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">2023</h2>

          <div className="space-y-4">
            {/* Publication 19 */}
            <div className="flex gap-4">
              <div className="font-bold text-lg min-w-[3rem]">19.</div>
              <div className="flex-1">
                <p className="text-base leading-relaxed">
                  Wang, Z., Liu, G., Zhou, Y., <u className="font-medium">Wang, T.*</u>, Shao, B.* (2023).
                  "<a href="https://proceedings.neurips.cc/paper_files/paper/2023/hash/f10ec1d701c6ec0677763d7c90f50480-Abstract-Conference.html" className="text-blue-600 hover:text-blue-800 hover:underline">Efficiently incorporating quintuple interactions into geometric deep learning force fields</a>".
                  <i><b>Proceedings of the 37th Conference on Neural Information Processing Systems (NeurIPS)</b></i>, 36: 77043–77055.
                </p>
              </div>
            </div>

            {/* Publication 18 */}
            <div className="flex gap-4">
              <div className="font-bold text-lg min-w-[3rem]">18.</div>
              <div className="flex-1">
                <p className="text-base leading-relaxed">
                  Wang, Y., Li, S., <u className="font-medium">Wang, T.</u>, Shao, B.*, Zheng, N.*, Liu, T. Y.* (2023).
                  "<a href="https://proceedings.neurips.cc/paper_files/paper/2023/hash/b0b7c1209b5ab4590b39e8b268fc3f17-Abstract-Conference.html" className="text-blue-600 hover:text-blue-800 hover:underline">Geometric transformer with interatomic positional encoding</a>".
                  <i><b>Proceedings of the 37th Conference on Neural Information Processing Systems (NeurIPS)</b></i>, 36: 55981–55994.
                </p>
              </div>
            </div>

            {/* Publication 17 */}
            <div className="flex gap-4">
              <div className="font-bold text-lg min-w-[3rem]">17.</div>
              <div className="flex-1">
                <p className="text-base leading-relaxed">
                  <u className="font-medium">Wang, T.*</u>, He, X., Li, M., Shao, B.*, Liu, T. Y.* (2023).
                  "<a href="https://www.nature.com/articles/s41597-023-02465-9" className="text-blue-600 hover:text-blue-800 hover:underline">AIMD-Chig: Exploring the conformational space of a 166-atom protein Chignolin with ab initio molecular dynamics</a>".
                  <i><b>Sci. Data</b></i>, 10(1): 549.
                </p>
              </div>
            </div>

            {/* Publication 16 */}
            <div className="flex gap-4">
              <div className="font-bold text-lg min-w-[3rem]">16.</div>
              <div className="flex-1">
                <p className="text-base leading-relaxed">
                  Wang, Z., Wu, H., Sun, L., He, X., Liu, Z., Shao, B.*, <u className="font-medium">Wang, T.*</u>, Liu, T. Y.* (2023).
                  "<a href="https://pubs.aip.org/aip/jcp/article/159/3/034102/2903029" className="text-blue-600 hover:text-blue-800 hover:underline">Improving machine learning force fields for molecular dynamics simulations with fine-grained force metrics</a>".
                  <i><b>J. Chem. Phys.</b></i>, 159(3): 034102.
                </p>
              </div>
            </div>

            {/* Publication 15 */}
            <div className="flex gap-4">
              <div className="font-bold text-lg min-w-[3rem]">15.</div>
              <div className="flex-1">
                <p className="text-base leading-relaxed">
                  Li, Z., Zhu, S., Shao, B., Zeng, X., <u className="font-medium">Wang, T.</u>, Liu, T. Y.* (2023).
                  "<a href="https://academic.oup.com/bib/article/24/1/bbac597/6967036" className="text-blue-600 hover:text-blue-800 hover:underline">DSN-DDI: an accurate and generalized framework for drug–drug interaction prediction by dual-view representation learning</a>".
                  <i><b>Brief. Bioinform.</b></i>, 24(1): bbac597.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2022 Publications */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">2022</h2>

          <div className="space-y-4">
            {/* Publication 14 */}
            <div className="flex gap-4">
              <div className="font-bold text-lg min-w-[3rem]">14.</div>
              <div className="flex-1">
                <p className="text-base leading-relaxed">
                  Gong, S., He, X., Meng, Q., Ma, Z., Shao, B.*, <u className="font-medium">Wang, T.*</u>, Liu, T. Y.* (2022).
                  "<a href="https://pubs.acs.org/doi/10.1021/acs.jpcb.2c04866" className="text-blue-600 hover:text-blue-800 hover:underline">Stochastic lag time parameterization for Markov state models of protein dynamics</a>".
                  <i><b>J. Phys. Chem. B</b></i>, 126(46): 9465–9475.
                </p>
              </div>
            </div>

            {/* Publication 13 */}
            <div className="flex gap-4">
              <div className="font-bold text-lg min-w-[3rem]">13.</div>
              <div className="flex-1">
                <p className="text-base leading-relaxed">
                  Liu, S., Wang, Y., Deng, Y., He, L., Shao, B., Yin, J., <u className="font-medium">Wang, T.</u>, Liu, T. Y.* (2022).
                  "<a href="https://academic.oup.com/bib/article/23/5/bbac162/6591682" className="text-blue-600 hover:text-blue-800 hover:underline">Improved drug–target interaction prediction with intermolecular graph transformer</a>".
                  <i><b>Brief. Bioinform.</b></i>, 23(5): bbac162.
                </p>
              </div>
            </div>

            {/* Publication 12 */}
            <div className="flex gap-4">
              <div className="font-bold text-lg min-w-[3rem]">12.</div>
              <div className="flex-1">
                <p className="text-base leading-relaxed">
                  Zhang, S., Liang, Q., He, X., Zhao, C., Ren, W., Yang, Z., Wang, Z., Ding, Q., Deng, H., <u className="font-medium">Wang, T.</u>, Zhang, L.*, Wang, X.* (2022).
                  "<a href="https://www.nature.com/articles/s41422-021-00614-4" className="text-blue-600 hover:text-blue-800 hover:underline">Loss of Spike N370 glycosylation as an important evolutionary event for the enhanced infectivity of SARS-CoV-2</a>".
                  <i><b>Cell Res.</b></i>, 32(3): 315–318.
                </p>
              </div>
            </div>

            {/* Publication 11 */}
            <div className="flex gap-4">
              <div className="font-bold text-lg min-w-[3rem]">11.</div>
              <div className="flex-1">
                <p className="text-base leading-relaxed">
                  Lan, J., He, X., Ren, Y., Wang, Z., Zhou, H., Fan, S., Qi, C., Guo, A., Wang, L., <u className="font-medium">Wang, T.</u>, Wang, X.* (2022).
                  "<a href="https://www.nature.com/articles/s41422-022-00644-8" className="text-blue-600 hover:text-blue-800 hover:underline">Structural insights into the SARS-CoV-2 Omicron RBD–ACE2 interaction</a>".
                  <i><b>Cell Res.</b></i>, 32(6): 593–595.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2021 Publications */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">2021</h2>

          <div className="space-y-4">
            {/* Publication 10 */}
            <div className="flex gap-4">
              <div className="font-bold text-lg min-w-[3rem]">10.</div>
              <div className="flex-1">
                <p className="text-base leading-relaxed">
                  Ding, W., Xu, Q., Liu, S., <u className="font-medium">Wang, T.</u>, Shao, B., Gong, H.*, Liu, T. Y.* (2021).
                  "<a href="https://academic.oup.com/bioinformatics/article/37/22/4075/6295877" className="text-blue-600 hover:text-blue-800 hover:underline">SAMF: a self-adaptive protein modeling framework</a>".
                  <i><b>Bioinformatics</b></i>, 37(22): 4075–4082.
                </p>
              </div>
            </div>

            {/* Publication 9 */}
            <div className="flex gap-4">
              <div className="font-bold text-lg min-w-[3rem]">9.</div>
              <div className="flex-1">
                <p className="text-base leading-relaxed">
                  Li, Y., <u className="font-medium">Wang, T.</u>, Zhang, J., Shao, B., Gong, H., Wang, Y., Wang, Z., Liu, T. Y.* (2021).
                  "<a href="https://onlinelibrary.wiley.com/doi/10.1002/adts.202100152" className="text-blue-600 hover:text-blue-800 hover:underline">Exploring the regulatory function of the N-terminal domain of SARS-CoV-2 Spike protein through molecular dynamics simulation</a>".
                  <i><b>Adv. Theory Simul.</b></i>, 4(10): 2100152.
                </p>
              </div>
            </div>

            {/* Publication 8 */}
            <div className="flex gap-4">
              <div className="font-bold text-lg min-w-[3rem]">8.</div>
              <div className="flex-1">
                <p className="text-base leading-relaxed">
                  Liu, S., <u className="font-medium">Wang, T.</u>, Xu, Q., Shao, B., Yin, J., Liu, T. Y.* (2021).
                  "<a href="https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-021-04271-7" className="text-blue-600 hover:text-blue-800 hover:underline">Complementing sequence-derived features with structural information extracted from fragment libraries for protein structure prediction</a>".
                  <i><b>BMC Bioinformatics</b></i>, 22(1): 351.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Prior to 2020 Publications */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">Prior to 2020</h2>

          <div className="space-y-4">
            {/* Publication 7 */}
            <div className="flex gap-4">
              <div className="font-bold text-lg min-w-[3rem]">7.</div>
              <div className="flex-1">
                <p className="text-base leading-relaxed">
                  <u className="font-medium">Wang, T.*</u>, Qiao, Y., Ding, W., Mao, W., Zhou, Y., Gong, H.* (2019).
                  "<a href="https://www.nature.com/articles/s42256-019-0075-7" className="text-blue-600 hover:text-blue-800 hover:underline">Improved fragment sampling for ab initio protein structure prediction using deep neural networks</a>".
                  <i><b>Nat. Mach. Intell.</b></i>, 1(8): 347–355.
                </p>
              </div>
            </div>

            {/* Publication 6 */}
            <div className="flex gap-4">
              <div className="font-bold text-lg min-w-[3rem]">6.</div>
              <div className="flex-1">
                <p className="text-base leading-relaxed">
                  Mao, W., <u className="font-medium">Wang, T.</u>, Zhang, W., Gong, H.* (2018).
                  "<a href="https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-018-2166-8" className="text-blue-600 hover:text-blue-800 hover:underline">Identification of residue pairing in interacting β-strands from a predicted residue contact map</a>".
                  <i><b>BMC Bioinformatics</b></i>, 19(1): 146.
                </p>
              </div>
            </div>

            {/* Publication 5 */}
            <div className="flex gap-4">
              <div className="font-bold text-lg min-w-[3rem]">5.</div>
              <div className="flex-1">
                <p className="text-base leading-relaxed">
                  <u className="font-medium">Wang, T.*</u>, Yang, Y., Zhou, Y., Gong, H.* (2017).
                  "<a href="https://academic.oup.com/bioinformatics/article/33/5/677/2608640" className="text-blue-600 hover:text-blue-800 hover:underline">LRFragLib: an effective algorithm to identify fragments for de novo protein structure prediction</a>".
                  <i><b>Bioinformatics</b></i>, 33(5): 677–684.
                </p>
              </div>
            </div>

            {/* Publication 4 */}
            <div className="flex gap-4">
              <div className="font-bold text-lg min-w-[3rem]">4.</div>
              <div className="flex-1">
                <p className="text-base leading-relaxed">
                  <u className="font-medium">Wang, T.</u>, Qin, Z. Y., Wang, J. X., Zhao, X. F.* (2015).
                  "<a href="https://www.sciencedirect.com/science/article/pii/S1050464815002503" className="text-blue-600 hover:text-blue-800 hover:underline">A C-type lectin with a sweet tooth: its role in antibacterial response in the shrimp Marsupenaeus japonicus</a>".
                  <i><b>Fish Shellfish Immunol.</b></i>, 47(1): 59–66.
                </p>
              </div>
            </div>

            {/* Publication 3 */}
            <div className="flex gap-4">
              <div className="font-bold text-lg min-w-[3rem]">3.</div>
              <div className="flex-1">
                <p className="text-base leading-relaxed">
                  <u className="font-medium">Wang, T.</u>, Zhao, X. F., Wang, J. X.* (2014).
                  "<a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0089962" className="text-blue-600 hover:text-blue-800 hover:underline">Molecular characterization of a novel Kazal-type serine proteinase inhibitor from the shrimp Marsupenaeus japonicus and its transcriptional response to viral and bacterial infections</a>".
                  <i><b>PLoS One</b></i>, 9(3): e89962.
                </p>
              </div>
            </div>

            {/* Publication 2 */}
            <div className="flex gap-4">
              <div className="font-bold text-lg min-w-[3rem]">2.</div>
              <div className="flex-1">
                <p className="text-base leading-relaxed">
                  Yang, Q., <u className="font-medium">Wang, T.</u>, Wang, J. X., Zhao, X. F.* (2013).
                  "<a href="https://www.sciencedirect.com/science/article/pii/S1050464813001459" className="text-blue-600 hover:text-blue-800 hover:underline">A novel C-type lectin from the shrimp Marsupenaeus japonicus that enhances melanization</a>".
                  <i><b>Fish Shellfish Immunol.</b></i>, 34(6): 1596–1603.
                </p>
              </div>
            </div>

            {/* Publication 1 */}
            <div className="flex gap-4">
              <div className="font-bold text-lg min-w-[3rem]">1.</div>
              <div className="flex-1">
                <p className="text-base leading-relaxed">
                  Jiang, H. S., Sun, C., <u className="font-medium">Wang, T.</u>, Zhao, X. F., Wang, J. X.* (2013).
                  "<a href="https://www.sciencedirect.com/science/article/pii/S1050464813001666" className="text-blue-600 hover:text-blue-800 hover:underline">A single whey acidic protein domain containing protein (SWD) inhibits bacteria invasion and dissemination in shrimp Marsupenaeus japonicus</a>".
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
