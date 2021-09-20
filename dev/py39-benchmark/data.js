window.BENCHMARK_DATA = {
  "lastUpdate": 1632152041799,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "a931845a8622e2ff2ca8a35d36fa452ef12bb3e0",
          "message": "Merge pull request #332 from TeoZosa/dependabot/pip/hypothesis-6.21.3",
          "timestamp": "2021-09-15T13:21:09Z",
          "tree_id": "fc4252e34008b9e9c898f2b0a37696c0c992b0e9"
        },
        "date": 1631712501556,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 13083.65269126743,
            "unit": "iter/sec",
            "range": "stddev: 0.0000547989160369623",
            "extra": "mean: 76.43125536857465 usec\nrounds: 1723"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3370502.083878388,
            "unit": "iter/sec",
            "range": "stddev: 0.000001013733227320237",
            "extra": "mean: 296.69170204139516 nsec\nrounds: 5182"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 10422.854290964142,
            "unit": "iter/sec",
            "range": "stddev: 0.000187851225316759",
            "extra": "mean: 95.94300870798197 usec\nrounds: 8842"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 114950.0441463476,
            "unit": "iter/sec",
            "range": "stddev: 0.000010862504466521543",
            "extra": "mean: 8.699431195753688 usec\nrounds: 45455"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14395.16285556673,
            "unit": "iter/sec",
            "range": "stddev: 0.00002789325949309638",
            "extra": "mean: 69.4677795613331 usec\nrounds: 8719"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4024405.2235930287,
            "unit": "iter/sec",
            "range": "stddev: 3.0563363958975625e-7",
            "extra": "mean: 248.4839235714821 nsec\nrounds: 44643"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "id": "bab682c7568c0d0edacb92f146489d7c1c7d34b4",
          "message": ":green_heart: Fix ADR documentation publishing overwriting benchmark files",
          "timestamp": "2021-09-16T00:32:30Z",
          "tree_id": "96436cc35a167b58dc45e0e84709edcd703d93bc"
        },
        "date": 1631752754869,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14221.584060386256,
            "unit": "iter/sec",
            "range": "stddev: 0.00009043063767018112",
            "extra": "mean: 70.3156551164695 usec\nrounds: 1876"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4090645.4586445345,
            "unit": "iter/sec",
            "range": "stddev: 3.4224152466244916e-7",
            "extra": "mean: 244.4601983012537 nsec\nrounds: 49023"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12143.950062339916,
            "unit": "iter/sec",
            "range": "stddev: 0.000021713024599115344",
            "extra": "mean: 82.34552965604985 usec\nrounds: 9408"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 118247.86414798412,
            "unit": "iter/sec",
            "range": "stddev: 0.000005417442975853677",
            "extra": "mean: 8.456812367862527 usec\nrounds: 43292"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14941.206450005086,
            "unit": "iter/sec",
            "range": "stddev: 0.00004107850055425676",
            "extra": "mean: 66.9289995654708 usec\nrounds: 9183"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3984591.3979666573,
            "unit": "iter/sec",
            "range": "stddev: 7.82094203576455e-7",
            "extra": "mean: 250.96676173893687 nsec\nrounds: 200000"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "444a0828b76799a62ce8bc7d4df557e09855a937",
          "message": "Merge pull request #333 from TeoZosa/dependabot/pip/tox-3.24.4",
          "timestamp": "2021-09-16T13:18:13Z",
          "tree_id": "d940518560014d3a40715335fd6b42599d5a9951"
        },
        "date": 1631801384484,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15239.361816479386,
            "unit": "iter/sec",
            "range": "stddev: 0.000033203600159970976",
            "extra": "mean: 65.61954575542856 usec\nrounds: 12392"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4085987.4674760564,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011216271451531684",
            "extra": "mean: 244.73888086050582 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12685.841852489786,
            "unit": "iter/sec",
            "range": "stddev: 0.000021789622349679828",
            "extra": "mean: 78.82803613886571 usec\nrounds: 8827"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 116368.06757942749,
            "unit": "iter/sec",
            "range": "stddev: 0.000012250186288441168",
            "extra": "mean: 8.593422755924395 usec\nrounds: 43479"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15274.007911208682,
            "unit": "iter/sec",
            "range": "stddev: 0.0000267067911350474",
            "extra": "mean: 65.4707006709195 usec\nrounds: 13263"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4002672.262093537,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014756678578063962",
            "extra": "mean: 249.83309512278632 nsec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "d05ccb3d4a310d1cc0ff921674c8309fe533fa9a",
          "message": "Merge pull request #335 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-3.24.4",
          "timestamp": "2021-09-16T13:52:57Z",
          "tree_id": "4b1a030980ce1fb5d983dc580d6f9d86f2bec915"
        },
        "date": 1631801881123,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14596.458892203173,
            "unit": "iter/sec",
            "range": "stddev: 0.000022578361958143674",
            "extra": "mean: 68.50976715552282 usec\nrounds: 5596"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4325444.86072594,
            "unit": "iter/sec",
            "range": "stddev: 3.1548526238120627e-7",
            "extra": "mean: 231.190093088331 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11359.220466549634,
            "unit": "iter/sec",
            "range": "stddev: 0.00015572403366579198",
            "extra": "mean: 88.03421000100988 usec\nrounds: 8819"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 127126.06375780932,
            "unit": "iter/sec",
            "range": "stddev: 0.000008298948983773205",
            "extra": "mean: 7.866207530071271 usec\nrounds: 40982"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14468.391975732458,
            "unit": "iter/sec",
            "range": "stddev: 0.00005049425688527451",
            "extra": "mean: 69.11618109858233 usec\nrounds: 8084"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4433945.295193621,
            "unit": "iter/sec",
            "range": "stddev: 3.0029687211283865e-7",
            "extra": "mean: 225.53277801690942 nsec\nrounds: 192271"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "02328b7ac01ef0324916fe5b5859737134acf6bf",
          "message": "Merge pull request #334 from TeoZosa/dependabot/pip/hypothesis-6.21.4",
          "timestamp": "2021-09-16T14:05:54Z",
          "tree_id": "7d90ba0d0ab39c66e19e834835a77d2e2b6b0a1d"
        },
        "date": 1631802079073,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15077.142757793914,
            "unit": "iter/sec",
            "range": "stddev: 0.000010957990848122603",
            "extra": "mean: 66.32556420433602 usec\nrounds: 7593"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5080687.242240189,
            "unit": "iter/sec",
            "range": "stddev: 1.3290013706956385e-8",
            "extra": "mean: 196.82376661298215 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14301.978190872713,
            "unit": "iter/sec",
            "range": "stddev: 0.000010728450970045927",
            "extra": "mean: 69.92039749006076 usec\nrounds: 8765"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 146330.99117400777,
            "unit": "iter/sec",
            "range": "stddev: 5.134757679212803e-7",
            "extra": "mean: 6.833822363786641 usec\nrounds: 29673"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16016.403274330685,
            "unit": "iter/sec",
            "range": "stddev: 0.00006013301670526532",
            "extra": "mean: 62.43599033265409 usec\nrounds: 13550"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4910218.737020255,
            "unit": "iter/sec",
            "range": "stddev: 9.842281952876883e-7",
            "extra": "mean: 203.65691500847745 nsec\nrounds: 200000"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "0c9841db5f7852ea7cd4d7b23d44a74823b3f625",
          "message": "Merge pull request #336 from TeoZosa/dependabot/pip/pylint-2.11.1",
          "timestamp": "2021-09-17T13:14:51Z",
          "tree_id": "3062df55171024cd312de98da2ddb6e44b29cc03"
        },
        "date": 1631885638328,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14945.14970648214,
            "unit": "iter/sec",
            "range": "stddev: 0.00004741314245671508",
            "extra": "mean: 66.91134044420252 usec\nrounds: 12469"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4428351.848943908,
            "unit": "iter/sec",
            "range": "stddev: 7.084276353069798e-7",
            "extra": "mean: 225.81764821566387 nsec\nrounds: 44445"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12743.62572220976,
            "unit": "iter/sec",
            "range": "stddev: 0.0000377683195537228",
            "extra": "mean: 78.47060340584132 usec\nrounds: 8104"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 142520.19892742852,
            "unit": "iter/sec",
            "range": "stddev: 0.000007340548489765142",
            "extra": "mean: 7.016549285825803 usec\nrounds: 52084"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14133.75969299117,
            "unit": "iter/sec",
            "range": "stddev: 0.00015462517872892725",
            "extra": "mean: 70.7525825910209 usec\nrounds: 11224"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4492272.246634168,
            "unit": "iter/sec",
            "range": "stddev: 3.9273421259119975e-7",
            "extra": "mean: 222.6044961431245 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "ea515138c9f3e6c6479dc67fd691a2f54388f882",
          "message": "Merge pull request #338 from TeoZosa/dependabot/pip/hypothesis-6.21.5",
          "timestamp": "2021-09-17T13:30:59Z",
          "tree_id": "7bbeeb1fa3b3e1deb40a47d894a02def33245463"
        },
        "date": 1631888821975,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15805.330029309385,
            "unit": "iter/sec",
            "range": "stddev: 0.000016864160191312946",
            "extra": "mean: 63.269795578175284 usec\nrounds: 12484"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4189614.4739297777,
            "unit": "iter/sec",
            "range": "stddev: 4.1357712599867826e-8",
            "extra": "mean: 238.6854461720925 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13328.442908147495,
            "unit": "iter/sec",
            "range": "stddev: 0.000020772022781240826",
            "extra": "mean: 75.02751873504396 usec\nrounds: 9074"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 121172.63519486689,
            "unit": "iter/sec",
            "range": "stddev: 0.000005238661667165365",
            "extra": "mean: 8.252688392819255 usec\nrounds: 37451"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15494.961561382624,
            "unit": "iter/sec",
            "range": "stddev: 0.00003398503160184725",
            "extra": "mean: 64.53710750030214 usec\nrounds: 13386"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4097379.2960935794,
            "unit": "iter/sec",
            "range": "stddev: 1.5754035165926985e-7",
            "extra": "mean: 244.05844022110105 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "51b3e79ceb130fac78deddf54460483e6075b8a5",
          "message": "Merge pull request #337 from TeoZosa/dependabot/pip/emoji-1.5.0",
          "timestamp": "2021-09-17T14:22:49Z",
          "tree_id": "93b53caf16c28e12357d10c9aeca1436d909b890"
        },
        "date": 1631889610130,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16435.517613361546,
            "unit": "iter/sec",
            "range": "stddev: 0.00001793665925588874",
            "extra": "mean: 60.84383975756457 usec\nrounds: 6278"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5069269.612779321,
            "unit": "iter/sec",
            "range": "stddev: 1.4930551843280173e-8",
            "extra": "mean: 197.26707719022056 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14312.922854103905,
            "unit": "iter/sec",
            "range": "stddev: 0.000017407603491727377",
            "extra": "mean: 69.86693145720916 usec\nrounds: 9133"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 144439.56434999028,
            "unit": "iter/sec",
            "range": "stddev: 0.000011670053612717478",
            "extra": "mean: 6.923310828997715 usec\nrounds: 34601"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16441.58027856782,
            "unit": "iter/sec",
            "range": "stddev: 0.0000071096952466152",
            "extra": "mean: 60.82140421158513 usec\nrounds: 14245"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5061018.222461334,
            "unit": "iter/sec",
            "range": "stddev: 1.628423921226298e-8",
            "extra": "mean: 197.588697776661 nsec\nrounds: 38168"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "id": "a1c2f4eea8612dda05bcf10b41385e9e7295372b",
          "message": ":green_heart: Fix test instance template Docker registry namespace",
          "timestamp": "2021-09-17T20:40:41Z",
          "tree_id": "a977c6c7a5e2fdd5680685e7db8da1f5f24cdfeb"
        },
        "date": 1631911616498,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14356.37433279403,
            "unit": "iter/sec",
            "range": "stddev: 0.0001233986742155438",
            "extra": "mean: 69.65546988529803 usec\nrounds: 12469"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3189807.6914614676,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024469228543025177",
            "extra": "mean: 313.4985230228242 nsec\nrounds: 4647"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12069.071923372147,
            "unit": "iter/sec",
            "range": "stddev: 0.0000694009029842661",
            "extra": "mean: 82.85641235292232 usec\nrounds: 8905"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 115908.03945001803,
            "unit": "iter/sec",
            "range": "stddev: 0.000008645119102730234",
            "extra": "mean: 8.627529244261101 usec\nrounds: 44248"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14470.102487147149,
            "unit": "iter/sec",
            "range": "stddev: 0.00008948973661199266",
            "extra": "mean: 69.10801087195027 usec\nrounds: 12049"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3656912.6035603555,
            "unit": "iter/sec",
            "range": "stddev: 4.1665156409385604e-7",
            "extra": "mean: 273.4547166989556 nsec\nrounds: 149254"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "id": "ef8175c8724e38c496962e1474f6b96cc907ee75",
          "message": ":green_heart: Fix test instance template Docker registry namespace",
          "timestamp": "2021-09-17T20:48:55Z",
          "tree_id": "f5ac1e21f9b1fcc082030a149440866c60909ae5"
        },
        "date": 1631912079395,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14766.90278297697,
            "unit": "iter/sec",
            "range": "stddev: 0.000017356080227419205",
            "extra": "mean: 67.71900747885893 usec\nrounds: 12034"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4294405.260072167,
            "unit": "iter/sec",
            "range": "stddev: 4.812652965405539e-7",
            "extra": "mean: 232.86111567015772 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11493.469719393734,
            "unit": "iter/sec",
            "range": "stddev: 0.0001417035285934467",
            "extra": "mean: 87.00592809781631 usec\nrounds: 7093"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 132797.8848440651,
            "unit": "iter/sec",
            "range": "stddev: 0.000005103978933058132",
            "extra": "mean: 7.530240418921035 usec\nrounds: 36765"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15497.741730513988,
            "unit": "iter/sec",
            "range": "stddev: 0.000008936852900374118",
            "extra": "mean: 64.5255300668141 usec\nrounds: 8348"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4310507.754918757,
            "unit": "iter/sec",
            "range": "stddev: 2.611639930862213e-7",
            "extra": "mean: 231.9912309311688 nsec\nrounds: 185186"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "id": "03350e720b6a41d0263720d3de2d112a174a2594",
          "message": ":green_heart: Fix test instance template PyPI upload email",
          "timestamp": "2021-09-17T21:02:20Z",
          "tree_id": "c72b5b3a0bd6410886d44d2afd9ca1330012317f"
        },
        "date": 1631912917524,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15064.867020993901,
            "unit": "iter/sec",
            "range": "stddev: 0.00007080198529686596",
            "extra": "mean: 66.37961016226913 usec\nrounds: 12005"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3860939.0902634864,
            "unit": "iter/sec",
            "range": "stddev: 6.432151783643107e-7",
            "extra": "mean: 259.00434495904267 nsec\nrounds: 178540"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12950.659486507304,
            "unit": "iter/sec",
            "range": "stddev: 0.0000418477992425644",
            "extra": "mean: 77.21614494164207 usec\nrounds: 5209"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 121411.61707157736,
            "unit": "iter/sec",
            "range": "stddev: 0.00004033998214666962",
            "extra": "mean: 8.236444123880313 usec\nrounds: 39525"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15057.705162268448,
            "unit": "iter/sec",
            "range": "stddev: 0.00007429082566651555",
            "extra": "mean: 66.41118213058103 usec\nrounds: 13106"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3909189.1953474698,
            "unit": "iter/sec",
            "range": "stddev: 1.454675724510815e-7",
            "extra": "mean: 255.8075217209194 nsec\nrounds: 11274"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "287f8d0c41adfa019606055069c6149bb88c6d75",
          "message": "Merge pull request #339 from TeoZosa/dependabot/pip/docs/poetry-1.1.9",
          "timestamp": "2021-09-20T13:18:46Z",
          "tree_id": "c6947bd44cef8def7a2f3e217f47d6256061e880"
        },
        "date": 1632149706235,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14137.7677647368,
            "unit": "iter/sec",
            "range": "stddev: 0.0000985841072541744",
            "extra": "mean: 70.73252416086896 usec\nrounds: 12210"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3772451.2145159612,
            "unit": "iter/sec",
            "range": "stddev: 4.170892119747587e-7",
            "extra": "mean: 265.07963738586966 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11635.52017817516,
            "unit": "iter/sec",
            "range": "stddev: 0.00005412317090707358",
            "extra": "mean: 85.94372960443212 usec\nrounds: 9242"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 116917.09927984844,
            "unit": "iter/sec",
            "range": "stddev: 0.000013421308153014147",
            "extra": "mean: 8.553068851002172 usec\nrounds: 41321"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15087.006617451418,
            "unit": "iter/sec",
            "range": "stddev: 0.000054922826125541524",
            "extra": "mean: 66.28220066154684 usec\nrounds: 2417"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3681988.023334072,
            "unit": "iter/sec",
            "range": "stddev: 5.063431575373626e-7",
            "extra": "mean: 271.592409769571 nsec\nrounds: 188680"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "1ed08e29112a40c8fd94b32586c3326240dbee0b",
          "message": "Merge pull request #341 from TeoZosa/dependabot/pip/hypothesis-6.21.6",
          "timestamp": "2021-09-20T13:40:43Z",
          "tree_id": "106075de2e18c5f61bbdd4f1823ac650fb2a9c08"
        },
        "date": 1632150238664,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16601.160010909913,
            "unit": "iter/sec",
            "range": "stddev: 0.000014088599957830286",
            "extra": "mean: 60.236754500457934 usec\nrounds: 5666"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5058731.635501487,
            "unit": "iter/sec",
            "range": "stddev: 1.0276324691503133e-8",
            "extra": "mean: 197.67800944073508 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14563.14809862968,
            "unit": "iter/sec",
            "range": "stddev: 0.000008081306091257388",
            "extra": "mean: 68.66647192128019 usec\nrounds: 9616"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 148507.79936884253,
            "unit": "iter/sec",
            "range": "stddev: 3.709739788858313e-7",
            "extra": "mean: 6.733653075798008 usec\nrounds: 44246"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16583.941167389512,
            "unit": "iter/sec",
            "range": "stddev: 0.000007381378461823273",
            "extra": "mean: 60.299297368854006 usec\nrounds: 13606"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5000815.869199663,
            "unit": "iter/sec",
            "range": "stddev: 1.4492831966146373e-8",
            "extra": "mean: 199.9673705560807 nsec\nrounds: 131579"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "af43ee784e86153968e0f8c6e4596dd986164606",
          "message": "Merge pull request #344 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/poetry-1.1.9",
          "timestamp": "2021-09-20T14:22:36Z",
          "tree_id": "3ea964f53acaa76250a77135c703f1a780d50ba1"
        },
        "date": 1632150459098,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15095.04757106566,
            "unit": "iter/sec",
            "range": "stddev: 0.000018529596643273258",
            "extra": "mean: 66.2468929158468 usec\nrounds: 13298"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4279918.266012659,
            "unit": "iter/sec",
            "range": "stddev: 8.143528566385932e-8",
            "extra": "mean: 233.6493217501627 nsec\nrounds: 4497"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12718.881268858771,
            "unit": "iter/sec",
            "range": "stddev: 0.000016660182944963682",
            "extra": "mean: 78.62326716174519 usec\nrounds: 9294"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 135029.25934613385,
            "unit": "iter/sec",
            "range": "stddev: 0.0000039495519361999595",
            "extra": "mean: 7.40580230419987 usec\nrounds: 3212"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14870.866144198959,
            "unit": "iter/sec",
            "range": "stddev: 0.000009642081410586309",
            "extra": "mean: 67.2455787244171 usec\nrounds: 3544"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4682889.489041495,
            "unit": "iter/sec",
            "range": "stddev: 7.02777770216195e-8",
            "extra": "mean: 213.54336939620634 nsec\nrounds: 188680"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "d90e2dbb52ef35e3aca2f07d57fab86065261b30",
          "message": "Merge pull request #340 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.1.9",
          "timestamp": "2021-09-20T14:59:54Z",
          "tree_id": "6c05f1d34714b4f33e22ccd676593fe71d5edf56"
        },
        "date": 1632151254761,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14436.123199222027,
            "unit": "iter/sec",
            "range": "stddev: 0.00001882266054723386",
            "extra": "mean: 69.27067511129933 usec\nrounds: 10342"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4364281.439767494,
            "unit": "iter/sec",
            "range": "stddev: 2.6019736948680206e-7",
            "extra": "mean: 229.13279397787724 nsec\nrounds: 161291"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12496.33930519396,
            "unit": "iter/sec",
            "range": "stddev: 0.000028165699868474232",
            "extra": "mean: 80.02343530992005 usec\nrounds: 4939"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 132773.60028114181,
            "unit": "iter/sec",
            "range": "stddev: 0.0000066682728561879235",
            "extra": "mean: 7.531617715287884 usec\nrounds: 45249"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14935.798510803632,
            "unit": "iter/sec",
            "range": "stddev: 0.00001845199187098805",
            "extra": "mean: 66.95323315165653 usec\nrounds: 9719"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4579864.854092425,
            "unit": "iter/sec",
            "range": "stddev: 2.2255439789534708e-7",
            "extra": "mean: 218.34705430377088 nsec\nrounds: 178572"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "c68798669833e56295bd68346e7623396d9f191c",
          "message": "Merge pull request #343 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/poetry-1.1.9",
          "timestamp": "2021-09-20T15:19:06Z",
          "tree_id": "2c5ec8c2936a81cc8fc74694e82539296a4b4b09"
        },
        "date": 1632152039259,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15561.588738825147,
            "unit": "iter/sec",
            "range": "stddev: 0.00003086656688052698",
            "extra": "mean: 64.26079089887945 usec\nrounds: 11779"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3746049.996280638,
            "unit": "iter/sec",
            "range": "stddev: 9.975043427950817e-7",
            "extra": "mean: 266.94785200197657 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12785.119099918787,
            "unit": "iter/sec",
            "range": "stddev: 0.00003363888817136424",
            "extra": "mean: 78.21593152044646 usec\nrounds: 8163"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 122653.52347102851,
            "unit": "iter/sec",
            "range": "stddev: 0.00000763827849877164",
            "extra": "mean: 8.153047476342625 usec\nrounds: 39999"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15474.043695920207,
            "unit": "iter/sec",
            "range": "stddev: 0.00007828897962054005",
            "extra": "mean: 64.62434898407675 usec\nrounds: 13141"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3953818.4957848946,
            "unit": "iter/sec",
            "range": "stddev: 2.7232041443970583e-7",
            "extra": "mean: 252.9200571716388 nsec\nrounds: 91744"
          }
        ]
      }
    ]
  }
}