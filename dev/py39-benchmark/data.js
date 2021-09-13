window.BENCHMARK_DATA = {
  "lastUpdate": 1631568681182,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
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
          "id": "68ec11e76455f1a1f61f2fe02fd9f061c198cf3b",
          "message": ":coffin: Remove redundant `yamllint` `line-length` pragma",
          "timestamp": "2021-09-13T21:24:47Z",
          "tree_id": "aaab372c3661f738c1fe3c67578eae2a268220a3"
        },
        "date": 1631568678062,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15699.141165387522,
            "unit": "iter/sec",
            "range": "stddev: 0.000009800081428086104",
            "extra": "mean: 63.69775196395692 usec\nrounds: 1528"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3260958.0695470856,
            "unit": "iter/sec",
            "range": "stddev: 4.921297190867084e-7",
            "extra": "mean: 306.6583435520394 nsec\nrounds: 5647"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13038.597603051216,
            "unit": "iter/sec",
            "range": "stddev: 0.000013735237019440114",
            "extra": "mean: 76.69536482711806 usec\nrounds: 8245"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 122023.62784113362,
            "unit": "iter/sec",
            "range": "stddev: 0.00000491458511677312",
            "extra": "mean: 8.195134153050516 usec\nrounds: 44643"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15459.09898570485,
            "unit": "iter/sec",
            "range": "stddev: 0.00004511430176634216",
            "extra": "mean: 64.68682301114106 usec\nrounds: 9882"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4068136.572778206,
            "unit": "iter/sec",
            "range": "stddev: 1.797323441577016e-7",
            "extra": "mean: 245.81278974046018 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}