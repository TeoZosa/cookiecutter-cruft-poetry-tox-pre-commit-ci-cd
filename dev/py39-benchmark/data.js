window.BENCHMARK_DATA = {
  "lastUpdate": 1630698975636,
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
          "id": "89f03573d02f7fc61cded78d1838e6a94d5a26c9",
          "message": ":children_crossing: Use dummy initial user-specific values",
          "timestamp": "2021-09-03T19:39:18Z",
          "tree_id": "590a0295372b27bc14d91771a5ab4ff80fd1115e"
        },
        "date": 1630698973207,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14375.039693531016,
            "unit": "iter/sec",
            "range": "stddev: 0.000058560639599916956",
            "extra": "mean: 69.56502530215725 usec\nrounds: 12331"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3841221.813070396,
            "unit": "iter/sec",
            "range": "stddev: 0.000001120113447847458",
            "extra": "mean: 260.33383352073264 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11143.75639810211,
            "unit": "iter/sec",
            "range": "stddev: 0.00010984174537968913",
            "extra": "mean: 89.73634780551285 usec\nrounds: 8292"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 120131.62892084496,
            "unit": "iter/sec",
            "range": "stddev: 0.000012714181020286062",
            "extra": "mean: 8.32420245178647 usec\nrounds: 47394"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14678.538447473793,
            "unit": "iter/sec",
            "range": "stddev: 0.00006238075475993452",
            "extra": "mean: 68.12667375423213 usec\nrounds: 8889"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3994101.21980938,
            "unit": "iter/sec",
            "range": "stddev: 5.5852620958334e-7",
            "extra": "mean: 250.36921824618702 nsec\nrounds: 185186"
          }
        ]
      }
    ]
  }
}