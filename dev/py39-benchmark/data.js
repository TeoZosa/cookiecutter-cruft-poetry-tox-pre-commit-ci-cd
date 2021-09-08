window.BENCHMARK_DATA = {
  "lastUpdate": 1631120873841,
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
          "id": "17433b3907783e3daad0e973074c91870884bbb3",
          "message": ":cookie: :memo: Hyperlink full text corresponding to reference",
          "timestamp": "2021-09-08T17:00:37Z",
          "tree_id": "a112a14e87868675e7310388a755d7be1e488472"
        },
        "date": 1631120871286,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14124.679240677422,
            "unit": "iter/sec",
            "range": "stddev: 0.00001167785960841979",
            "extra": "mean: 70.79806790373809 usec\nrounds: 7113"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5219073.585481866,
            "unit": "iter/sec",
            "range": "stddev: 1.1532527381779677e-8",
            "extra": "mean: 191.60488612033683 nsec\nrounds: 48077"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13211.52120982281,
            "unit": "iter/sec",
            "range": "stddev: 0.000013692030969364714",
            "extra": "mean: 75.69151077443654 usec\nrounds: 5801"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 151657.0394596138,
            "unit": "iter/sec",
            "range": "stddev: 6.481076610755597e-7",
            "extra": "mean: 6.593825143647879 usec\nrounds: 51814"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15297.234254716293,
            "unit": "iter/sec",
            "range": "stddev: 0.000010710410127886041",
            "extra": "mean: 65.37129414042214 usec\nrounds: 7850"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5053115.744841534,
            "unit": "iter/sec",
            "range": "stddev: 9.520136865963927e-9",
            "extra": "mean: 197.89770321819563 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}