window.BENCHMARK_DATA = {
  "lastUpdate": 1648862290177,
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
          "id": "7b92610f66caf12c3ca74377b94baa8c799f6efb",
          "message": "Merge pull request #399 from TeoZosa/dependabot/pip/darglint-1.8.1",
          "timestamp": "2021-10-29T13:14:27Z",
          "tree_id": "e539de4a3afefd68a14277449160984bbaa31c1a"
        },
        "date": 1635513886351,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 130199.02425203749,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031020333380222873",
            "extra": "mean: 7.68054911121398 usec\nrounds: 62501"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5887411.878632218,
            "unit": "iter/sec",
            "range": "stddev: 2.748421112156706e-8",
            "extra": "mean: 169.85392233721333 nsec\nrounds: 62501"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 38251.19054449494,
            "unit": "iter/sec",
            "range": "stddev: 0.000006935564658229445",
            "extra": "mean: 26.142977140457102 usec\nrounds: 50001"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 79358.06317470514,
            "unit": "iter/sec",
            "range": "stddev: 0.0000060840116994463625",
            "extra": "mean: 12.601113988864883 usec\nrounds: 100001"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 129981.43315496355,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016540551021317716",
            "extra": "mean: 7.69340647912236 usec\nrounds: 19231"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5841335.05548499,
            "unit": "iter/sec",
            "range": "stddev: 2.71947744954886e-8",
            "extra": "mean: 171.1937409001699 nsec\nrounds: 62501"
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
          "id": "97610109386c32146c59ff7aa99cd8a699de12ef",
          "message": "Merge pull request #549 from TeoZosa/dependabot/pip/hypothesis-6.39.1",
          "timestamp": "2022-03-03T14:26:25Z",
          "tree_id": "8b7df9a079a31307100f8c54f8b59b32ab47cbb9"
        },
        "date": 1646318531505,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 122600.35198207706,
            "unit": "iter/sec",
            "range": "stddev: 0.000002510661045015745",
            "extra": "mean: 8.156583434166567 usec\nrounds: 100001"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5722303.350468624,
            "unit": "iter/sec",
            "range": "stddev: 2.7236495331167362e-8",
            "extra": "mean: 174.7548039231319 nsec\nrounds: 62501"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 37260.12134186246,
            "unit": "iter/sec",
            "range": "stddev: 0.000010313176599634802",
            "extra": "mean: 26.838345233097264 usec\nrounds: 47620"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 84099.8467127306,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023741938217621026",
            "extra": "mean: 11.890628093720712 usec\nrounds: 90910"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 106714.28922061971,
            "unit": "iter/sec",
            "range": "stddev: 0.000002149358951564604",
            "extra": "mean: 9.370816291833357 usec\nrounds: 100001"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5781070.211587718,
            "unit": "iter/sec",
            "range": "stddev: 2.4206009075743494e-8",
            "extra": "mean: 172.97835234645743 nsec\nrounds: 62501"
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
          "id": "ddd296cba6e47beb03bbf040c574b016694b04a5",
          "message": "Merge pull request #548 from TeoZosa/dependabot/github_actions/actions/download-artifact-3\n\n⬆️ Bump actions/download-artifact from 2.1.0 to 3",
          "timestamp": "2022-03-04T22:10:00Z",
          "tree_id": "0a5cc6c4be3f2bb7deeda38b3680d104903cd0c8"
        },
        "date": 1646432004094,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 197690.5595022707,
            "unit": "iter/sec",
            "range": "stddev: 5.664836406417602e-7",
            "extra": "mean: 5.0584104902007585 usec\nrounds: 21277"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 6050394.624627119,
            "unit": "iter/sec",
            "range": "stddev: 1.4894443599204012e-8",
            "extra": "mean: 165.27847554440288 nsec\nrounds: 62501"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 45237.520187644746,
            "unit": "iter/sec",
            "range": "stddev: 0.000002936687284607251",
            "extra": "mean: 22.10554415564803 usec\nrounds: 52632"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 87025.80115149356,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023345146576511214",
            "extra": "mean: 11.490845091551767 usec\nrounds: 100001"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 189021.44813507452,
            "unit": "iter/sec",
            "range": "stddev: 6.922175930874265e-7",
            "extra": "mean: 5.290404924234571 usec\nrounds: 71429"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5980653.281431821,
            "unit": "iter/sec",
            "range": "stddev: 1.9101364716210145e-8",
            "extra": "mean: 167.20581397094716 nsec\nrounds: 66667"
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
          "id": "e5bd23c32d3b3f9c651b834d177fa6bf04d5b949",
          "message": "Merge pull request #581 from TeoZosa/breaking/drop-python37-support\n\n➖ Drop Python 3.7 support",
          "timestamp": "2022-04-02T01:03:12Z",
          "tree_id": "30a2b44bdc4b6628ea909dedb95ead24b2898ed0"
        },
        "date": 1648861660666,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 144585.89056842346,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025113121391554497",
            "extra": "mean: 6.916304184790414 usec\nrounds: 20001"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5756587.733598753,
            "unit": "iter/sec",
            "range": "stddev: 6.467595094360656e-8",
            "extra": "mean: 173.71402057566053 nsec\nrounds: 62501"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 37625.916845296924,
            "unit": "iter/sec",
            "range": "stddev: 0.000007928026175108621",
            "extra": "mean: 26.57742545149423 usec\nrounds: 47620"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 79073.62693181567,
            "unit": "iter/sec",
            "range": "stddev: 0.000004573895941397033",
            "extra": "mean: 12.646441535586689 usec\nrounds: 90910"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 149471.2345781823,
            "unit": "iter/sec",
            "range": "stddev: 0.000002227515194618182",
            "extra": "mean: 6.690250487474012 usec\nrounds: 20001"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5725228.249744032,
            "unit": "iter/sec",
            "range": "stddev: 5.918915208823649e-8",
            "extra": "mean: 174.6655253516536 nsec\nrounds: 62501"
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
          "id": "9c217754cb6b9117a16947f9f7699f2e7d84bc17",
          "message": "Merge pull request #582 from TeoZosa/dependabot/pip/hypothesis-6.41.0",
          "timestamp": "2022-04-02T01:06:32Z",
          "tree_id": "c7d22b5abdbd37a7ed36d7d4b0a818a312876942"
        },
        "date": 1648862287544,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 160221.68050033666,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017715941540007893",
            "extra": "mean: 6.241352586474081 usec\nrounds: 100001"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5910634.5271985205,
            "unit": "iter/sec",
            "range": "stddev: 1.672537969533407e-8",
            "extra": "mean: 169.1865730148533 nsec\nrounds: 62501"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 41757.362933378914,
            "unit": "iter/sec",
            "range": "stddev: 0.000005457074352615653",
            "extra": "mean: 23.947872417025792 usec\nrounds: 55556"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 83807.39911366226,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019283703875770877",
            "extra": "mean: 11.932120678793147 usec\nrounds: 100001"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 173232.09142367967,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017063903246285854",
            "extra": "mean: 5.772602476721914 usec\nrounds: 20834"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5823787.1342015425,
            "unit": "iter/sec",
            "range": "stddev: 3.178785482855446e-8",
            "extra": "mean: 171.70957264679475 nsec\nrounds: 62501"
          }
        ]
      }
    ]
  }
}