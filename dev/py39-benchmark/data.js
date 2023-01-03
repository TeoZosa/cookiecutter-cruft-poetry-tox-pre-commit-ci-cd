window.BENCHMARK_DATA = {
  "lastUpdate": 1633121393547,
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
          "id": "4b9c00fce14f43a1768a950927123b9f25ababae",
          "message": "Merge pull request #345 from TeoZosa/dependabot/pip/pytest-xdist-2.4.0",
          "timestamp": "2021-09-21T13:16:40Z",
          "tree_id": "624f8910539dc7bbf98f83ea5981f58b0cd9bc09"
        },
        "date": 1632232229281,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15255.992998189193,
            "unit": "iter/sec",
            "range": "stddev: 0.000013344575824615594",
            "extra": "mean: 65.54801120574025 usec\nrounds: 11601"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4403255.452637927,
            "unit": "iter/sec",
            "range": "stddev: 3.7557389191513936e-8",
            "extra": "mean: 227.10469804847622 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13429.878741729206,
            "unit": "iter/sec",
            "range": "stddev: 0.000013334949811681133",
            "extra": "mean: 74.4608361126008 usec\nrounds: 9116"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 132133.64724619407,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011675756325043797",
            "extra": "mean: 7.568095037419045 usec\nrounds: 3083"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15298.229991769025,
            "unit": "iter/sec",
            "range": "stddev: 0.000007655771135019069",
            "extra": "mean: 65.36703922859274 usec\nrounds: 2957"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4250103.312980498,
            "unit": "iter/sec",
            "range": "stddev: 3.387196233189463e-8",
            "extra": "mean: 235.2883980361244 nsec\nrounds: 192308"
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
          "id": "d7b9d4d061f9e260eee6433f7ae0228f19212c28",
          "message": "Merge pull request #346 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.1.10",
          "timestamp": "2021-09-22T13:14:00Z",
          "tree_id": "f775e783f5674b655a8f950fa5a63a63173dd2d7"
        },
        "date": 1632320025295,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16384.474915824983,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029650110767313104",
            "extra": "mean: 61.03338710196613 usec\nrounds: 6435"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5049933.892807307,
            "unit": "iter/sec",
            "range": "stddev: 1.616832795917316e-8",
            "extra": "mean: 198.02239419891637 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14243.753974725212,
            "unit": "iter/sec",
            "range": "stddev: 0.000006295154428486625",
            "extra": "mean: 70.20621121190713 usec\nrounds: 9133"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 147636.54301780186,
            "unit": "iter/sec",
            "range": "stddev: 6.892768382683262e-7",
            "extra": "mean: 6.773390784959122 usec\nrounds: 50506"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16410.197171457385,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031053264949257197",
            "extra": "mean: 60.937719976900816 usec\nrounds: 13756"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4978125.626829196,
            "unit": "iter/sec",
            "range": "stddev: 1.237879033492008e-7",
            "extra": "mean: 200.8788196526707 nsec\nrounds: 192308"
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
          "id": "711c366961d6dc74c8fe17ef4dcb4ee08937f55d",
          "message": "Merge pull request #350 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/poetry-1.1.10",
          "timestamp": "2021-09-22T13:53:13Z",
          "tree_id": "b3b589770d9889a2e1f2bc8083e1ad1a11197d11"
        },
        "date": 1632320914778,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15036.338301861306,
            "unit": "iter/sec",
            "range": "stddev: 0.000014000360318808839",
            "extra": "mean: 66.50555340831968 usec\nrounds: 11075"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4200152.6223646635,
            "unit": "iter/sec",
            "range": "stddev: 6.476054179863803e-7",
            "extra": "mean: 238.0865863481362 nsec\nrounds: 8961"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12329.474931066632,
            "unit": "iter/sec",
            "range": "stddev: 0.00001913848297985598",
            "extra": "mean: 81.1064547023244 usec\nrounds: 4051"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 139016.51500208848,
            "unit": "iter/sec",
            "range": "stddev: 0.000004722463804530752",
            "extra": "mean: 7.193389936332217 usec\nrounds: 54055"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15182.915455526912,
            "unit": "iter/sec",
            "range": "stddev: 0.000014806450715208616",
            "extra": "mean: 65.8635031545261 usec\nrounds: 7133"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4277896.0878115175,
            "unit": "iter/sec",
            "range": "stddev: 2.3040362719611473e-7",
            "extra": "mean: 233.75976869759168 nsec\nrounds: 188680"
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
          "id": "a946ccb0f81c0c3b692188008b3e510c7d9b6777",
          "message": "Merge pull request #349 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/poetry-1.1.10",
          "timestamp": "2021-09-22T14:22:42Z",
          "tree_id": "521268ddf3b36c3eac68950ff01f5b83de7f2472"
        },
        "date": 1632321785984,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14734.968415100211,
            "unit": "iter/sec",
            "range": "stddev: 0.000045921682842662876",
            "extra": "mean: 67.86577153264967 usec\nrounds: 11262"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3654393.527438921,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012921513389633524",
            "extra": "mean: 273.64321671734865 nsec\nrounds: 166667"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11928.196425002941,
            "unit": "iter/sec",
            "range": "stddev: 0.00002753710687810667",
            "extra": "mean: 83.83497088494276 usec\nrounds: 8518"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 114988.41337254143,
            "unit": "iter/sec",
            "range": "stddev: 0.000011087062082976193",
            "extra": "mean: 8.696528377691264 usec\nrounds: 43291"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14392.76661992054,
            "unit": "iter/sec",
            "range": "stddev: 0.00003243173285529286",
            "extra": "mean: 69.47934517439711 usec\nrounds: 6869"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3751997.829044638,
            "unit": "iter/sec",
            "range": "stddev: 5.367804994373559e-7",
            "extra": "mean: 266.5246744704614 nsec\nrounds: 169492"
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
          "id": "262e030be92247ab48893b741b172aa464316f5a",
          "message": "Merge pull request #348 from TeoZosa/dependabot/pip/docs/poetry-1.1.10",
          "timestamp": "2021-09-22T14:37:41Z",
          "tree_id": "25b01a1097c202d39c7ba5ef35dd13c206f670da"
        },
        "date": 1632322113220,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14941.502239025567,
            "unit": "iter/sec",
            "range": "stddev: 0.000026673293322674567",
            "extra": "mean: 66.92767460745075 usec\nrounds: 1721"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3358233.8532620496,
            "unit": "iter/sec",
            "range": "stddev: 7.629595403126814e-8",
            "extra": "mean: 297.7755700451419 nsec\nrounds: 4869"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12823.88219019136,
            "unit": "iter/sec",
            "range": "stddev: 0.00006649917458140428",
            "extra": "mean: 77.979506140884 usec\nrounds: 8223"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 121360.80223367004,
            "unit": "iter/sec",
            "range": "stddev: 0.000005796451622179905",
            "extra": "mean: 8.239892795653939 usec\nrounds: 34840"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15126.088575151105,
            "unit": "iter/sec",
            "range": "stddev: 0.00002688707384708286",
            "extra": "mean: 66.11094434834818 usec\nrounds: 6954"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3953347.770633241,
            "unit": "iter/sec",
            "range": "stddev: 5.780684394185269e-7",
            "extra": "mean: 252.95017236473151 nsec\nrounds: 181819"
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
          "id": "87009cfdce2ce27a18d66a2688b10d21a92d6a2f",
          "message": "Merge pull request #351 from TeoZosa/dependabot/pip/hypothesis-6.22.0",
          "timestamp": "2021-09-24T13:17:00Z",
          "tree_id": "1445291e25bef44abd62d68ef405745be4dd5871"
        },
        "date": 1632490445407,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14888.20079423677,
            "unit": "iter/sec",
            "range": "stddev: 0.000019957982294652054",
            "extra": "mean: 67.16728326146034 usec\nrounds: 1631"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3999856.660571562,
            "unit": "iter/sec",
            "range": "stddev: 8.605567807040408e-7",
            "extra": "mean: 250.00895903499065 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11408.9868476703,
            "unit": "iter/sec",
            "range": "stddev: 0.00013423159540266124",
            "extra": "mean: 87.65020184103365 usec\nrounds: 7169"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 115190.70169913572,
            "unit": "iter/sec",
            "range": "stddev: 0.000004793353317168143",
            "extra": "mean: 8.681256258095205 usec\nrounds: 35714"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14889.201470202577,
            "unit": "iter/sec",
            "range": "stddev: 0.000029140691880253836",
            "extra": "mean: 67.16276907134862 usec\nrounds: 7734"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3974235.054159795,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010092985462199504",
            "extra": "mean: 251.62074874089527 nsec\nrounds: 185151"
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
          "id": "b565161039660c1d559dac944948c638a6f60c3d",
          "message": "Merge pull request #352 from TeoZosa/dependabot/pip/xdoctest-0.15.9",
          "timestamp": "2021-09-24T13:54:46Z",
          "tree_id": "75f20ad2ab2b4fbc52a7fc05caba0b1ba69fbc46"
        },
        "date": 1632493261144,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14072.371735020377,
            "unit": "iter/sec",
            "range": "stddev: 0.00000996136634545491",
            "extra": "mean: 71.0612268372224 usec\nrounds: 13459"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5365604.111022555,
            "unit": "iter/sec",
            "range": "stddev: 3.956564518201709e-8",
            "extra": "mean: 186.37230390241666 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11708.171395675772,
            "unit": "iter/sec",
            "range": "stddev: 0.000016833938364704186",
            "extra": "mean: 85.41043397855742 usec\nrounds: 10330"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 179252.93127636204,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010196279791505547",
            "extra": "mean: 5.578709329211785 usec\nrounds: 56177"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14219.50812467323,
            "unit": "iter/sec",
            "range": "stddev: 0.00001537046739736921",
            "extra": "mean: 70.32592064593517 usec\nrounds: 14555"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5453793.226672709,
            "unit": "iter/sec",
            "range": "stddev: 3.9811709710907344e-8",
            "extra": "mean: 183.35862003545026 nsec\nrounds: 188680"
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
          "id": "c1b2a45598657acbd4f39ea84c95942f9d2364c0",
          "message": "Merge pull request #353 from TeoZosa/dependabot/pip/hypothesis-6.23.0",
          "timestamp": "2021-09-27T13:16:06Z",
          "tree_id": "27df76209304846fc18e6d2a44bbfc24b31b2426"
        },
        "date": 1632752044554,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16564.12809558238,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025912918219091158",
            "extra": "mean: 60.371423972910364 usec\nrounds: 7083"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5098198.299647524,
            "unit": "iter/sec",
            "range": "stddev: 1.4764116616651635e-8",
            "extra": "mean: 196.1477253776443 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14499.94198397196,
            "unit": "iter/sec",
            "range": "stddev: 0.000008895855476651129",
            "extra": "mean: 68.9657931807856 usec\nrounds: 8858"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 145093.73697294592,
            "unit": "iter/sec",
            "range": "stddev: 3.359961158053631e-7",
            "extra": "mean: 6.892096246624755 usec\nrounds: 35461"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16612.662126572992,
            "unit": "iter/sec",
            "range": "stddev: 0.000005919390891847648",
            "extra": "mean: 60.19504835413691 usec\nrounds: 13794"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5100342.584921676,
            "unit": "iter/sec",
            "range": "stddev: 1.786204933413375e-8",
            "extra": "mean: 196.06526098000302 nsec\nrounds: 192308"
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
          "id": "48c6cc309e439cd4832362559c1b037394568528",
          "message": "Merge pull request #356 from TeoZosa/dependabot/pip/icontract-2.5.5",
          "timestamp": "2021-09-27T13:45:19Z",
          "tree_id": "77840b106e8ed68debabf3dacef2a2f1300066f3"
        },
        "date": 1632753071111,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14962.365402587939,
            "unit": "iter/sec",
            "range": "stddev: 0.0000420909097206502",
            "extra": "mean: 66.83435226271354 usec\nrounds: 5547"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3898515.1642959686,
            "unit": "iter/sec",
            "range": "stddev: 5.427879416671124e-7",
            "extra": "mean: 256.5079159261369 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12385.681207857633,
            "unit": "iter/sec",
            "range": "stddev: 0.00006182741909404933",
            "extra": "mean: 80.73839324764691 usec\nrounds: 6398"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 121217.8857528978,
            "unit": "iter/sec",
            "range": "stddev: 0.000006859524999867368",
            "extra": "mean: 8.24960766960163 usec\nrounds: 33222"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15265.936176068319,
            "unit": "iter/sec",
            "range": "stddev: 0.00004119234088910796",
            "extra": "mean: 65.50531775232051 usec\nrounds: 8258"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3629071.8970576753,
            "unit": "iter/sec",
            "range": "stddev: 4.455309842812036e-7",
            "extra": "mean: 275.5525457654608 nsec\nrounds: 149254"
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
          "id": "c45c99bb83c694895ed790e6680414bf831301af",
          "message": "Merge pull request #354 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.11.0",
          "timestamp": "2021-09-27T14:28:23Z",
          "tree_id": "b8c1c234b3ee3c2fd4c4242a8ed88bbf992d0dda"
        },
        "date": 1632753317167,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14365.893020413196,
            "unit": "iter/sec",
            "range": "stddev: 0.000048138060534653196",
            "extra": "mean: 69.60931691326473 usec\nrounds: 11429"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3016779.062002589,
            "unit": "iter/sec",
            "range": "stddev: 2.509962615694327e-7",
            "extra": "mean: 331.47936240852295 nsec\nrounds: 3828"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12420.203771283139,
            "unit": "iter/sec",
            "range": "stddev: 0.000032899708230907004",
            "extra": "mean: 80.51397693748864 usec\nrounds: 8889"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 144533.8257983423,
            "unit": "iter/sec",
            "range": "stddev: 0.000009348407581290896",
            "extra": "mean: 6.9187956139431925 usec\nrounds: 49020"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14255.350543196555,
            "unit": "iter/sec",
            "range": "stddev: 0.00011563651858709406",
            "extra": "mean: 70.14909924310881 usec\nrounds: 14006"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4024083.0738226715,
            "unit": "iter/sec",
            "range": "stddev: 5.410664565656236e-7",
            "extra": "mean: 248.50381606317606 nsec\nrounds: 172385"
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
          "id": "4165cb3ad34b7312c338fb0965e3e065a7aca7d0",
          "message": "Merge pull request #355 from TeoZosa/dependabot/pip/sphinxcontrib-confluencebuilder-1.6.0",
          "timestamp": "2021-09-27T14:50:13Z",
          "tree_id": "61fac1b8330a1f96e191d91d66692924868f9a55"
        },
        "date": 1632754627529,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16439.914413565268,
            "unit": "iter/sec",
            "range": "stddev: 0.000005292597693895292",
            "extra": "mean: 60.827567275828265 usec\nrounds: 11765"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5009024.965266327,
            "unit": "iter/sec",
            "range": "stddev: 8.202405454481823e-8",
            "extra": "mean: 199.63965181523704 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13998.269886133561,
            "unit": "iter/sec",
            "range": "stddev: 0.000012873403819593609",
            "extra": "mean: 71.4373996311203 usec\nrounds: 8673"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 147489.02729604815,
            "unit": "iter/sec",
            "range": "stddev: 5.828100161549176e-7",
            "extra": "mean: 6.780165401679303 usec\nrounds: 36100"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15997.308731937994,
            "unit": "iter/sec",
            "range": "stddev: 0.00004784140931382802",
            "extra": "mean: 62.51051453445664 usec\nrounds: 13210"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5039865.355558701,
            "unit": "iter/sec",
            "range": "stddev: 1.5662430059149326e-8",
            "extra": "mean: 198.41799918264203 nsec\nrounds: 178572"
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
          "id": "e88808350c10c4e4da21807de4aa39b647d4af80",
          "message": "Merge pull request #357 from TeoZosa/dependabot/github_actions/actions/setup-node-2.4.1",
          "timestamp": "2021-09-28T13:12:57Z",
          "tree_id": "5d394db7a26cebcd3e8759d7fcbcb5e803de827c"
        },
        "date": 1632835398559,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14351.627971591914,
            "unit": "iter/sec",
            "range": "stddev: 0.00006056246517496855",
            "extra": "mean: 69.67850629764324 usec\nrounds: 11274"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3795089.0851408145,
            "unit": "iter/sec",
            "range": "stddev: 6.21984637003502e-7",
            "extra": "mean: 263.49842587747685 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12077.653274588389,
            "unit": "iter/sec",
            "range": "stddev: 0.00008689216917765043",
            "extra": "mean: 82.79754164693723 usec\nrounds: 8620"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 115009.1432641558,
            "unit": "iter/sec",
            "range": "stddev: 0.00000889264874790518",
            "extra": "mean: 8.694960866747573 usec\nrounds: 28901"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 13157.669025108615,
            "unit": "iter/sec",
            "range": "stddev: 0.00019339299055219378",
            "extra": "mean: 76.00130373333701 usec\nrounds: 12804"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3943984.0320820077,
            "unit": "iter/sec",
            "range": "stddev: 8.783739030608765e-7",
            "extra": "mean: 253.55072228093576 nsec\nrounds: 192308"
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
          "id": "4585d1a50557fc1a67848440ff6ae41a0c1b83aa",
          "message": "Merge pull request #358 from TeoZosa/dependabot/pip/hypothesis-6.23.1",
          "timestamp": "2021-09-29T13:21:43Z",
          "tree_id": "270c381cb4e1d66f29c58de56e507e513fab6d5e"
        },
        "date": 1632922076297,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14008.219848309805,
            "unit": "iter/sec",
            "range": "stddev: 0.000023076286520737766",
            "extra": "mean: 71.3866580356859 usec\nrounds: 11934"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4251485.325773436,
            "unit": "iter/sec",
            "range": "stddev: 2.157280118674572e-7",
            "extra": "mean: 235.21191380748024 nsec\nrounds: 169492"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12185.060173942451,
            "unit": "iter/sec",
            "range": "stddev: 0.00003087655859341518",
            "extra": "mean: 82.0677112566488 usec\nrounds: 8111"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 125605.27522199391,
            "unit": "iter/sec",
            "range": "stddev: 0.000005438873999311504",
            "extra": "mean: 7.961449057235906 usec\nrounds: 46297"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14912.318344607756,
            "unit": "iter/sec",
            "range": "stddev: 0.000014576605726263502",
            "extra": "mean: 67.05865425422577 usec\nrounds: 9050"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4397418.771821701,
            "unit": "iter/sec",
            "range": "stddev: 1.9806387462296352e-7",
            "extra": "mean: 227.40613343616133 nsec\nrounds: 156250"
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
          "id": "b57953f9e5948be30f95b244459d5b08a63fd5a6",
          "message": ":cookie: :rotating_light: Fix `pylint` error: `unspecified-encoding`\n\nError log:\n```\npylint...............................................................................Failed\n- hook id: pylint\n- duration: 9.72s\n- exit code: 4\n\n************* Module conf\ndocs/source/conf.py:60:13: W1514: Using open without explicitly specifying an encoding (unspecified-encoding)\n```",
          "timestamp": "2021-09-30T16:47:23Z",
          "tree_id": "27accc8a86b8385c90e0beb92c248f10f1fc39b8"
        },
        "date": 1633020755369,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14402.614176939001,
            "unit": "iter/sec",
            "range": "stddev: 0.000010047738157722989",
            "extra": "mean: 69.43183978372258 usec\nrounds: 7028"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4995182.602214724,
            "unit": "iter/sec",
            "range": "stddev: 4.588779824480395e-8",
            "extra": "mean: 200.19288174920288 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13436.759192263795,
            "unit": "iter/sec",
            "range": "stddev: 0.000012967326116458006",
            "extra": "mean: 74.42270756595454 usec\nrounds: 9226"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 149456.2358980134,
            "unit": "iter/sec",
            "range": "stddev: 9.336304120878384e-7",
            "extra": "mean: 6.690921887544287 usec\nrounds: 32786"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15106.346042443583,
            "unit": "iter/sec",
            "range": "stddev: 0.000009580527150367115",
            "extra": "mean: 66.19734495624206 usec\nrounds: 13680"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5003558.761694374,
            "unit": "iter/sec",
            "range": "stddev: 2.6535463416441698e-8",
            "extra": "mean: 199.85775077854535 nsec\nrounds: 181819"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "04e5bac9a0bb9ae6429092b6f567657198fcf7b2",
          "message": "Merge pull request #330 from TeoZosa/dependabot/pip/black-21.9b0\n\n⬆️ Bump black from 21.8b0 to 21.9b0",
          "timestamp": "2021-09-30T18:31:26Z",
          "tree_id": "a558e49efddabc7f6196e912bb75bedade2cdb88"
        },
        "date": 1633027017171,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15439.762571033356,
            "unit": "iter/sec",
            "range": "stddev: 0.000028912200740643614",
            "extra": "mean: 64.7678353471644 usec\nrounds: 11588"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4387252.012726523,
            "unit": "iter/sec",
            "range": "stddev: 3.206454891950022e-7",
            "extra": "mean: 227.93311099958657 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12573.580068817091,
            "unit": "iter/sec",
            "range": "stddev: 0.000034984236919904135",
            "extra": "mean: 79.5318433196313 usec\nrounds: 7327"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 136203.2182661518,
            "unit": "iter/sec",
            "range": "stddev: 0.000006936487546209138",
            "extra": "mean: 7.341970422798097 usec\nrounds: 46083"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14977.160979095757,
            "unit": "iter/sec",
            "range": "stddev: 0.0000221703001846024",
            "extra": "mean: 66.76832821625817 usec\nrounds: 13680"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4525142.471066906,
            "unit": "iter/sec",
            "range": "stddev: 2.2857244364245414e-7",
            "extra": "mean: 220.98751727576197 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "83eea29178a7b854b342514b62605d683a74ea3b",
          "message": "Merge pull request #359 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-e482459\n\n⬆️ Bump python from `cd1045d` to `e482459` in /{{cookiecutter.project_slug}}",
          "timestamp": "2021-09-30T22:41:18Z",
          "tree_id": "4e9d493320e1ce2154bbc7135b874a64522a653d"
        },
        "date": 1633041987716,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16521.106012954035,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021598913918862235",
            "extra": "mean: 60.52863526303323 usec\nrounds: 4129"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5069337.935189903,
            "unit": "iter/sec",
            "range": "stddev: 4.7974233672651516e-8",
            "extra": "mean: 197.26441850687573 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14527.896111157788,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037158467207335866",
            "extra": "mean: 68.83309134018208 usec\nrounds: 9700"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 148716.40450101142,
            "unit": "iter/sec",
            "range": "stddev: 5.929969835541185e-7",
            "extra": "mean: 6.7242077520318135 usec\nrounds: 45872"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16509.625224705862,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031474048008263524",
            "extra": "mean: 60.5707268571759 usec\nrounds: 8977"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5219010.412324804,
            "unit": "iter/sec",
            "range": "stddev: 6.358332338678799e-9",
            "extra": "mean: 191.60720538865053 nsec\nrounds: 50762"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "968b0721669004e3c2ec6e5d95e744395b1e6694",
          "message": "Merge pull request #331 from TeoZosa/dependabot/pip/sphinx-rtd-theme-1.0.0\n\n⬆️ Bump sphinx-rtd-theme from 0.5.2 to 1.0.0",
          "timestamp": "2021-09-30T22:41:12Z",
          "tree_id": "0594d32a9b6b97f9a66898d3f5394384e2e1361d"
        },
        "date": 1633041990908,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14963.444305664214,
            "unit": "iter/sec",
            "range": "stddev: 0.000012146662194849697",
            "extra": "mean: 66.82953333287466 usec\nrounds: 2040"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4867178.692645264,
            "unit": "iter/sec",
            "range": "stddev: 5.180550450159745e-7",
            "extra": "mean: 205.4578356676785 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11650.981700140252,
            "unit": "iter/sec",
            "range": "stddev: 0.00013360909140725877",
            "extra": "mean: 85.82967733851665 usec\nrounds: 7184"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 143266.55886255912,
            "unit": "iter/sec",
            "range": "stddev: 0.000008085268379602343",
            "extra": "mean: 6.97999594559493 usec\nrounds: 47847"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14834.377127904007,
            "unit": "iter/sec",
            "range": "stddev: 0.000026060902149692177",
            "extra": "mean: 67.41098674908051 usec\nrounds: 7924"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4051331.237067335,
            "unit": "iter/sec",
            "range": "stddev: 4.687863282649215e-7",
            "extra": "mean: 246.83244629578843 nsec\nrounds: 39843"
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
          "id": "7bc8fd5b3efe49d60cd296805c2ba2e2edb577ea",
          "message": ":recycle: Extract `SRC_DIR` variable\n\nBetter documentation and a single source of truth.",
          "timestamp": "2021-10-01T02:10:54Z",
          "tree_id": "45b9b010a980cba455344551b2856cba673e9245"
        },
        "date": 1633054676603,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14623.468875865905,
            "unit": "iter/sec",
            "range": "stddev: 0.000018356540849368314",
            "extra": "mean: 68.38322756992135 usec\nrounds: 12093"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4833611.770069803,
            "unit": "iter/sec",
            "range": "stddev: 3.153368667851616e-7",
            "extra": "mean: 206.88463359666585 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11627.541079160594,
            "unit": "iter/sec",
            "range": "stddev: 0.000042286820253498975",
            "extra": "mean: 86.00270626368678 usec\nrounds: 9260"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 132767.57399312188,
            "unit": "iter/sec",
            "range": "stddev: 0.000010215316275203982",
            "extra": "mean: 7.531959573591408 usec\nrounds: 48310"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14588.732260731225,
            "unit": "iter/sec",
            "range": "stddev: 0.000019906944049887643",
            "extra": "mean: 68.54605198915876 usec\nrounds: 7617"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4281494.875609997,
            "unit": "iter/sec",
            "range": "stddev: 7.933040149348702e-7",
            "extra": "mean: 233.56328316476382 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "fbb313307a73f5115752d5dd613967a2a9859605",
          "message": "Merge pull request #360 from TeoZosa/update-structlog-sentry-logger-integration\n\n👽 Use Latest structlog-sentry-logger Features",
          "timestamp": "2021-10-01T20:28:01Z",
          "tree_id": "e1eec7a1bc17ba9976015b96b70be2298244ddfb"
        },
        "date": 1633120680441,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14738.47143976977,
            "unit": "iter/sec",
            "range": "stddev: 0.000021435143804688173",
            "extra": "mean: 67.8496412661652 usec\nrounds: 12034"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4549738.298831349,
            "unit": "iter/sec",
            "range": "stddev: 1.7203452941818853e-7",
            "extra": "mean: 219.79286154935184 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12071.263388899919,
            "unit": "iter/sec",
            "range": "stddev: 0.00002393624477918268",
            "extra": "mean: 82.8413702678003 usec\nrounds: 5758"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 132476.43416584565,
            "unit": "iter/sec",
            "range": "stddev: 0.000005077678234379205",
            "extra": "mean: 7.548512354643483 usec\nrounds: 42373"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14885.79044585389,
            "unit": "iter/sec",
            "range": "stddev: 0.000018947505008658687",
            "extra": "mean: 67.17815917384004 usec\nrounds: 5761"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4277393.246244518,
            "unit": "iter/sec",
            "range": "stddev: 2.348007332024641e-7",
            "extra": "mean: 233.78724901611747 nsec\nrounds: 196079"
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
          "id": "78c3f33c4bf2dee5cd5a361374c81544c152c7aa",
          "message": ":arrow_up: Bump GitHub Action `codecov/codecov-action`",
          "timestamp": "2021-10-01T20:29:05Z",
          "tree_id": "c0bd2128601414b6986efa0c087c797c186ce558"
        },
        "date": 1633120994142,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14246.524973422354,
            "unit": "iter/sec",
            "range": "stddev: 0.00003043446477026848",
            "extra": "mean: 70.19255585945014 usec\nrounds: 9497"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3589660.3295656117,
            "unit": "iter/sec",
            "range": "stddev: 6.492112629284383e-7",
            "extra": "mean: 278.5778898810865 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11581.550081013605,
            "unit": "iter/sec",
            "range": "stddev: 0.000028488284530830265",
            "extra": "mean: 86.34422793192127 usec\nrounds: 6208"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 103896.98239602815,
            "unit": "iter/sec",
            "range": "stddev: 0.000016831867611937506",
            "extra": "mean: 9.624918615906102 usec\nrounds: 42195"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14394.795982221827,
            "unit": "iter/sec",
            "range": "stddev: 0.000027603329558854974",
            "extra": "mean: 69.46955005371674 usec\nrounds: 7452"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3524077.957703007,
            "unit": "iter/sec",
            "range": "stddev: 6.10984306406841e-7",
            "extra": "mean: 283.76216758004307 nsec\nrounds: 196079"
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
          "id": "dcdf132661ef0f76d6bd75e57acf90cf21edc092",
          "message": ":bug: Preempt premature brace expansion by the shell\n\nIf multiple commands are passed via brace syntax, quoting the string\nallows direct evaluation by tox as opposed to generating multiple envs\nin the call to tox. For example,\n`poetry run tox -e py3{8,9} -- $ (POSARGS)`\nbecomes\n`poetry run tox -e py38 py39 -- $(POSARGS)`\nwhereas\n`poetry run tox -e \"py3{8,9}\" -- $(POSARGS)`\npasses \"py3{8,9}\" directly to tox.\n\nNote: to activate this behavior via the `tox-%` make target, users would\nhave to also invoke it with quotes, e.g., `make tox-\"py3{8,9}\"`.\n- If a user were to enter `make tox-py3{8,9}`, this would become\n`make tox-py38 tox-py39\"`, which, while this would still work, leads to\ndifferent semantics as separate make targets are actually invoked.\n\nsee: https://www.gnu.org/software/bash/manual/html_node/Brace-Expansion.html",
          "timestamp": "2021-10-01T20:30:57Z",
          "tree_id": "f583f750f0c086d482763c88e2ae6981a5fbe527"
        },
        "date": 1633121068972,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15075.520070443268,
            "unit": "iter/sec",
            "range": "stddev: 0.00002013447804574719",
            "extra": "mean: 66.3327033049147 usec\nrounds: 12346"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4887447.199916664,
            "unit": "iter/sec",
            "range": "stddev: 3.7698825296741e-7",
            "extra": "mean: 204.60579093645728 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12522.27468127435,
            "unit": "iter/sec",
            "range": "stddev: 0.00006148792866037605",
            "extra": "mean: 79.85769562261618 usec\nrounds: 7310"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 144109.02546086736,
            "unit": "iter/sec",
            "range": "stddev: 0.000007870164176064297",
            "extra": "mean: 6.939190635714547 usec\nrounds: 47394"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14705.979574709812,
            "unit": "iter/sec",
            "range": "stddev: 0.000025061594606655094",
            "extra": "mean: 67.99955044951385 usec\nrounds: 8117"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4832717.3876318885,
            "unit": "iter/sec",
            "range": "stddev: 4.984244194617551e-7",
            "extra": "mean: 206.9229213693211 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "d39b0f0c2eac91fe60cfaef808e36d4126ab860f",
          "message": "Merge pull request #361 from TeoZosa/streamline-and-improve-ci-workflows\n\n👷‍♀️ Streamline CI Workflows and Reduce CI Pipeline Latency",
          "timestamp": "2021-10-01T20:43:02Z",
          "tree_id": "1fadc529e25fb071d4f8377daed85d7adb9bb261"
        },
        "date": 1633121391241,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14694.43801226233,
            "unit": "iter/sec",
            "range": "stddev: 0.00002658257038516339",
            "extra": "mean: 68.05295984545391 usec\nrounds: 5429"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4805115.489952405,
            "unit": "iter/sec",
            "range": "stddev: 1.759186719732017e-7",
            "extra": "mean: 208.11154322727214 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12479.932138440876,
            "unit": "iter/sec",
            "range": "stddev: 0.000016065661943149358",
            "extra": "mean: 80.12864083770015 usec\nrounds: 1910"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 131979.32317097412,
            "unit": "iter/sec",
            "range": "stddev: 0.000015701158848269425",
            "extra": "mean: 7.576944448370436 usec\nrounds: 42195"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14907.34007092651,
            "unit": "iter/sec",
            "range": "stddev: 0.000018015225849062914",
            "extra": "mean: 67.0810483454577 usec\nrounds: 13569"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3943002.681893838,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022248704931682526",
            "extra": "mean: 253.61382699346393 nsec\nrounds: 52911"
          }
        ]
      }
    ]
  }
}