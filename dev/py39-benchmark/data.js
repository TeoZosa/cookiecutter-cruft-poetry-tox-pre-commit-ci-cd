window.BENCHMARK_DATA = {
  "lastUpdate": 1624577444125,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "82d0cfbbbb40d88db14fed9ab4505065f2e5fc81",
          "message": ":green_heart: Remove Git LFS checkout hook for Semgrep job",
          "timestamp": "2021-06-24T23:25:33Z",
          "tree_id": "45c2339ff2f51f4cf3db8ca534662b78c3086801"
        },
        "date": 1624577442455,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15181.582308842288,
            "unit": "iter/sec",
            "range": "stddev: 0.00002065140651951723",
            "extra": "mean: 65.86928685408272 usec\nrounds: 12407"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4098347.4302825527,
            "unit": "iter/sec",
            "range": "stddev: 9.790418851889863e-7",
            "extra": "mean: 244.00078739315802 nsec\nrounds: 161291"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12033.907082836726,
            "unit": "iter/sec",
            "range": "stddev: 0.00002711942085459402",
            "extra": "mean: 83.09853093566285 usec\nrounds: 7257"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 121844.81127113891,
            "unit": "iter/sec",
            "range": "stddev: 0.00001948906104876505",
            "extra": "mean: 8.207161138562718 usec\nrounds: 49262"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 13549.016104110702,
            "unit": "iter/sec",
            "range": "stddev: 0.00015618883702942066",
            "extra": "mean: 73.80609723362902 usec\nrounds: 13699"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4175342.335557245,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014434120084750086",
            "extra": "mean: 239.50131980448646 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}