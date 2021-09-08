window.BENCHMARK_DATA = {
  "lastUpdate": 1631126257601,
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
          "id": "5cd5ae01f9535d02be55a42e93c9a9d2143e903f",
          "message": ":memo: Change to more appropriate admonitions",
          "timestamp": "2021-09-08T18:31:29Z",
          "tree_id": "f699cace3b67575d8ef074c220b3567644c30144"
        },
        "date": 1631126255424,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15495.718057009663,
            "unit": "iter/sec",
            "range": "stddev: 0.000009627402849538417",
            "extra": "mean: 64.53395682090633 usec\nrounds: 1876"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3894251.1759734936,
            "unit": "iter/sec",
            "range": "stddev: 3.0206618548973866e-7",
            "extra": "mean: 256.7887778194388 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12227.854856781956,
            "unit": "iter/sec",
            "range": "stddev: 0.00003427076238377428",
            "extra": "mean: 81.78049312102918 usec\nrounds: 4289"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 120608.323754841,
            "unit": "iter/sec",
            "range": "stddev: 0.000006338793445103663",
            "extra": "mean: 8.291301701802002 usec\nrounds: 43669"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14969.244312088626,
            "unit": "iter/sec",
            "range": "stddev: 0.000029109871497301417",
            "extra": "mean: 66.80363945910321 usec\nrounds: 13158"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4010975.667351581,
            "unit": "iter/sec",
            "range": "stddev: 2.0498101924448245e-7",
            "extra": "mean: 249.31589790971688 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}