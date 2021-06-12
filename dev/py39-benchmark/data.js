window.BENCHMARK_DATA = {
  "lastUpdate": 1623460290503,
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
          "id": "21ce77bad0db20c9431bffd73089105f48bda337",
          "message": ":memo: :cookie: Fix `sphinx-autoapi` hyperlink",
          "timestamp": "2021-06-12T00:13:06Z",
          "tree_id": "5b379e055633987fd09ac6a4b237ba16613eb838"
        },
        "date": 1623460289158,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14577.658513532711,
            "unit": "iter/sec",
            "range": "stddev: 0.00006328512301482774",
            "extra": "mean: 68.59812219305874 usec\nrounds: 13004"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4813774.699923181,
            "unit": "iter/sec",
            "range": "stddev: 1.5818131960710663e-7",
            "extra": "mean: 207.73718388127747 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12494.341126744746,
            "unit": "iter/sec",
            "range": "stddev: 0.000020689431641590954",
            "extra": "mean: 80.0362331919569 usec\nrounds: 9653"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 146350.88050262292,
            "unit": "iter/sec",
            "range": "stddev: 0.000004018859959311562",
            "extra": "mean: 6.832893635935985 usec\nrounds: 50252"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14623.07321692173,
            "unit": "iter/sec",
            "range": "stddev: 0.000013495304108583622",
            "extra": "mean: 68.3850778263769 usec\nrounds: 13967"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4968354.421041103,
            "unit": "iter/sec",
            "range": "stddev: 1.459307796248653e-7",
            "extra": "mean: 201.27388572895447 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}