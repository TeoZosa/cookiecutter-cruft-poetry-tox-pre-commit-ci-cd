window.BENCHMARK_DATA = {
  "lastUpdate": 1628368364771,
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
          "id": "e7a2f57d33c3168c5e91e490581d92f4c6fed67d",
          "message": ":memo: :pencil2: Fix casing",
          "timestamp": "2021-08-07T17:43:57Z",
          "tree_id": "d2a21c1261166ee4cf43f904845b622a58ae7881"
        },
        "date": 1628368363454,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15788.252111952399,
            "unit": "iter/sec",
            "range": "stddev: 0.000012701205265591104",
            "extra": "mean: 63.33823357450417 usec\nrounds: 10776"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4322622.136935918,
            "unit": "iter/sec",
            "range": "stddev: 7.171029515247571e-8",
            "extra": "mean: 231.34106297529434 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13764.81109703061,
            "unit": "iter/sec",
            "range": "stddev: 0.000017831227385280146",
            "extra": "mean: 72.64901733491449 usec\nrounds: 4961"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 132372.93241446887,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010077372768174666",
            "extra": "mean: 7.55441449970248 usec\nrounds: 44842"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15337.642460457862,
            "unit": "iter/sec",
            "range": "stddev: 0.00004409795412544676",
            "extra": "mean: 65.19906840820617 usec\nrounds: 7616"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4107085.3282085033,
            "unit": "iter/sec",
            "range": "stddev: 7.269318560651669e-7",
            "extra": "mean: 243.48167132835462 nsec\nrounds: 192308"
          }
        ]
      }
    ]
  }
}